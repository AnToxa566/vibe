"use client";

import Link from "next/link";
import pluralize from "pluralize";
import { usePathname } from "next/navigation";
import { useQuery } from "react-query";
import { useRouter } from "next/navigation";
import { PropsWithChildren, FC } from "react";

import { QueryKey, Resource } from "~/common/enums/enums";
import { Button } from "~/components/components";
import { authService } from "~/services/services";

import styles from "./layout.module.scss";

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  const router = useRouter();

  const { data: isAdmin, isLoading } = useQuery(
    QueryKey.CHECK_AUTH,
    authService.checkAuth
  );

  if (isLoading) {
    return <main>Loading...</main>;
  }

  if (!isAdmin) {
    router.push("/login");
  }

  const getSlug = (): Resource =>
    (pathname.split("/").pop() as Resource) || Resource.BARBERSHOPS;

  const isActive = (title: Resource) => getSlug() === title;

  const isResource = () => Object.values(Resource).includes(getSlug());

  const handleAddClick = () => {
    router.push(`/admin/${getSlug()}/add`);
  };

  return (
    <section className={styles.layout}>
      <aside className={styles.sideBar}>
        <div className={styles.title}>\ Resources</div>

        <div className={styles.resources}>
          {Object.values(Resource).map((it) => (
            <Link
              key={it}
              href={`/admin/${it}`}
              className={`${isActive(it) ? styles.active : ""} ${
                styles.resource
              }`}
            >
              {it}
            </Link>
          ))}
        </div>
      </aside>

      <main className={styles.main}>
        <div className={styles.top}>
          <h2 className={styles.title}>{getSlug()}</h2>
          {isResource() && (
            <Button
              title={`Add ${pluralize.singular(getSlug())}`}
              onClick={handleAddClick}
              className={styles.btn}
            />
          )}
        </div>

        {children}
      </main>
    </section>
  );
};

export default AdminLayout;
