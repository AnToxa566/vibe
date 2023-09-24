"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useQuery } from "react-query";
import { useRouter } from "next/navigation";
import { PropsWithChildren, FC } from "react";
import pluralize from "pluralize";

import { Button } from "~/components/components";
import { authService } from "~/services/services";

import styles from "./layout.module.scss";

const resources = [
  { title: "barbershops" },
  { title: "barbers" },
  { title: "graduations" },
  { title: "prices" },
  { title: "services" },
];

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  const router = useRouter();

  const { data: isAdmin, isLoading } = useQuery(
    "checkAuth",
    authService.checkAuth
  );

  if (isLoading) {
    return <main>Loading...</main>;
  }

  if (!isAdmin) {
    router.push("/login");
  }

  const getSlug = (): string => pathname.split("/").pop() || "";

  const isActive = (title: string) => getSlug() === title;

  return (
    <section className={styles.layout}>
      <aside className={styles.sideBar}>
        <div className={styles.title}>\ Resources</div>

        <div className={styles.resources}>
          {resources.map((it) => (
            <Link
              key={it.title}
              href={`/admin/${it.title}`}
              className={`${isActive(it.title) ? styles.active : ""} ${
                styles.resource
              }`}
            >
              {it.title}
            </Link>
          ))}
        </div>
      </aside>

      <main className={styles.main}>
        <div className={styles.top}>
          <h2 className={styles.title}>{getSlug()}</h2>

          <Button
            title={`Add ${pluralize.singular(getSlug())}`}
            className={styles.btn}
          />
        </div>

        {children}
      </main>
    </section>
  );
};

export default AdminLayout;
