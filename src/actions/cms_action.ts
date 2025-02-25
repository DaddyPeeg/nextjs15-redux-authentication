"use server";

import { db } from "@/db";
import { files_folder_table } from "@/db/schema/file_folder_schema";
import { Files_Folders, Roles } from "@/types";
import { eq, inArray } from "drizzle-orm";
import { revalidateTag, unstable_cache } from "next/cache";
import { getSession, isAuth } from "./auth-action";
import { hasPermission } from "@/lib/RBAC";

export const getAllFilesAndFolders = unstable_cache(
  async () => {
    try {
      const session = await getSession();
      if (
        !session ||
        !hasPermission(session?.user.role as Roles, "view:lessons")
      )
        throw Error("Permission Denied");

      const results = await db.select().from(files_folder_table);
      return results;
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
      throw new Error(
        `Failed to fetch files and folders. Please try again.: ${error.message}`
      );
    }
  },
  ["filesfolders"],
  { revalidate: 30, tags: ["filesfolders"] }
);

export const refreshGetAllFilesAndFolders = async () => {
  try {
    const { admin } = await isAuth();
    if (!admin) throw Error("Permission Denied");

    const results = await db.select().from(files_folder_table);
    return results;
  } catch (error: any) {
    console.error("Error fetching data:", error.message);
    throw new Error(
      `Failed to refetch files and folders. Please try again.: ${error.message}`
    );
  }
};

export const createNewFileFolder = async (file: {
  name: string;
  type: "file" | "folder";
  parentId: number | null;
  url: string | null;
}) => {
  try {
    const { admin } = await isAuth();
    if (!admin) throw Error("Permission Denied");
    if (!file.name) throw Error("Please provide File/Folder name");
    // const data =
    await db
      .insert(files_folder_table)
      .values(file)
      .$returningId()
      .then((val) => val[0]);
    revalidateTag("filesfolders");
  } catch (error: any) {
    console.error("Error Creating File/Folder:", error.message);
    throw new Error(
      `Failed to create File / Folder. Please try again.: ${error.message}`
    );
  }
};

export const deleteFileFolder = async (id: number, data?: Files_Folders) => {
  try {
    const { admin } = await isAuth();
    if (!admin) throw Error("Permission Denied");
    if (data) {
      const ids = data?.map((item) => item.id);
      await db
        .delete(files_folder_table)
        .where(inArray(files_folder_table.id, ids));
    }

    if (!id) throw Error("Please provide File/Folder id");
    await db.delete(files_folder_table).where(eq(files_folder_table.id, id));

    revalidateTag("filesfolders");
  } catch (error: any) {
    console.error("Error Deleting File/Folder:", error.message);
    throw new Error(
      `Failed to Delete File / Folder. Please try again.: ${error.message}`
    );
  }
};

export const renameFileFolder = async (id: number, name: string) => {
  try {
    const { admin } = await isAuth();
    if (!admin) throw Error("Permission Denied");
    if (!id || !name) throw Error("Please provide File/Folder id and name");
    await db
      .update(files_folder_table)
      .set({ name })
      .where(eq(files_folder_table.id, id));
    revalidateTag("filesfolders");
  } catch (error: any) {
    console.error("Error Renaming File/Folder:", error.message);
    throw new Error(
      `Failed to Rename File / Folder. Please try again.: ${error.message}`
    );
  }
};
