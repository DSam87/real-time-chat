import Image from "next/image";
import styles from "./page.module.css";
import { db } from "@/lib/db";
import Button from "@/components/ui/Button";

export default async function Home() {
  // await db.set("hello", "hello");

  return <Button>Hello</Button>;
}
