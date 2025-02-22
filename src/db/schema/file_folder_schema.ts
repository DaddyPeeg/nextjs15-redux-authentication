import {
  int,
  text,
  index,
  singlestoreTableCreator,
  bigint,
  timestamp,
} from "drizzle-orm/singlestore-core";

export const createTable = singlestoreTableCreator(
  (name) => `cfc_g12_cms_${name}`
);

export const files_folder_table = createTable(
  "files_folder_table",
  {
    id: bigint("id", { mode: "number", unsigned: true })
      .primaryKey()
      .autoincrement(),
    name: text("name").notNull(),
    type: text("type", { enum: ["file", "folder"] }).notNull(),
    parentId: bigint("parent_id", { mode: "number", unsigned: true }),
    url: text("url"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (t) => {
    return [
      index("parent_id_index").on(t.parentId),
      index("type_index").on(t.type),
    ];
  }
);

// export const folders_table = createTable(
//   "folders_table",
//   {
//     id: bigint("id", { mode: "number", unsigned: true })
//       .primaryKey()
//       .autoincrement(),
//     ownerId: text("owner_id").notNull(),

//     name: text("name").notNull(),
//     parent: bigint("parent", { mode: "number", unsigned: true }),
//     createdAt: timestamp("created_at").notNull().defaultNow(),
//   },
//   (t) => {
//     return [
//       index("parent_index").on(t.parent),
//       index("owner_id_index").on(t.ownerId),
//     ];
//   }
// );

export const slider_table = createTable("slider_table", {
  id: bigint("id", { mode: "number", unsigned: true })
    .primaryKey()
    .autoincrement(),
  userId: text("owner_id").notNull(),
  name: text("name").notNull(),
  imageUrl: text("imageUrl").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type DB_FileType = typeof files_folder_table.$inferSelect;
// export type DB_FolderType = typeof folders_table.$inferSelect;
export type DB_SliderItemType = typeof slider_table.$inferSelect;
