import React from "react";

import {
  Calendar,
  ChevronRight,
  Heart,
  Info,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Lobby = () => {
  return (
    <section className="flex-1 py-6 bg-gradient-to-br from-neutral-50 via-background to-neutral-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <section>
              <h1 className="font-montserrat text-center md:text-start tracking-tighter font-bold lg:text-5xl text-4xl text-neutral-600">
                Welcome to <br />
                <span className="text-neutral-800">
                  Christian Fellowship Church
                </span>
              </h1>
              <p className="mt-2 text-center md:text-start text-base leading-tight">
                We{"’"}re so glad you{"’"}re here! May this be a place of peace,
                faith, and fellowship. Join us in worship and community as we
                grow together in Christ.
              </p>
              <p className="text-center md:text-start italic mt-2 text-sm">
                "For where two or three gather in my name, there am I with
                them." {"–"} Matthew 18:20
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Upcoming Events
              </h2>
              <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-4">
                <Card className="sm:col-span-2">
                  <CardHeader>
                    <CardTitle>Sunday Divine Service</CardTitle>
                    <CardDescription>Every Sunday at 9:00 AM</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Join us for praise, prayer, and an inspiring message.</p>
                    <Button className="mt-2" variant="outline">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
                <Card className="sm:col-span-2">
                  <CardHeader>
                    <CardTitle>Youth Ministry Activities</CardTitle>
                    <CardDescription>Saturday at 1:00 PM</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Fun, fellowship, and faith-building for teens.</p>
                    <Button className="mt-2" variant="outline">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
                <Card className="sm:col-span-4">
                  <CardHeader>
                    <CardTitle>Prayer and Fasting</CardTitle>
                    <CardDescription>March 3, 2025 @ 6:00 PM</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Join us in a time of prayer and fasting as we draw closer
                      to God, seek His guidance, and strengthen our faith.
                      Surrender, believe, and experience His power in your life!
                    </p>
                    <Button className="mt-2" variant="outline">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Featured Ministries
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Children's Ministry</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Nurturing young hearts in faith and fun.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Cell Group</CardTitle>
                  </CardHeader>
                  <CardContent>
                    A Place to Connect, Pray, and Grow in Faith
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Prayer Warriors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Join the Army of God’s Prayer Warriors
                  </CardContent>
                </Card>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Latest Announcements
              </h2>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center space-x-2">
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  <span>
                    Volunteer sign-ups for the upcomming Prayer and Fasting!
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  <span>
                    Sign up for those who are ready to undergo worship team
                    training.
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  <span>
                    House-to-house visitation! Sign up if you'd like us to visit
                    you.
                  </span>
                </li>
              </ul>
            </section>
            <section className="rounded-lg bg-muted border shadow-md p-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                New Here?
              </h2>
              <p className="mt-2 text-muted-foreground">
                We'd love to get to know you! Fill out our visitor card and
                receive a free welcome gift.
              </p>
              <Button className="mt-4">Get Connected</Button>
            </section>
          </div>
          <aside className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Service Times</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Sunday Divine Service:</span>
                    <span>9:00 AM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday Prayer:</span>
                    <span>9:00 AM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Wednesday Midweek Service</span>
                    <span>5:00 PM</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="flex items-center space-x-2 hover:underline"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Events</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center space-x-2 hover:underline"
                    >
                      <Heart className="h-4 w-4" />
                      <span>Ministries</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center space-x-2 hover:underline"
                    >
                      <Info className="h-4 w-4" />
                      <span>About Us</span>
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <address className="space-y-2 not-italic">
                  <p className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span>
                      Sitio Malusay, Brgy. Caradio-an, Himamaylan City, Negros
                      Occidental
                    </span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>(+63) 939-835-1262</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>cfc.himamaylan@gmail.com</span>
                  </p>
                </address>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Lobby;
