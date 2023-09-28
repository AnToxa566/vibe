"use client";

import Link from "next/link";
import Image from "next/image";
import pluralize from "pluralize";
import { usePathname } from "next/navigation";
import { useQuery } from "react-query";
import { useRouter } from "next/navigation";
import { PropsWithChildren, FC } from "react";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

import { QueryKey, Resource } from "~/common/enums/enums";
import { Button, FullSpinner } from "~/components/components";
import { authService } from "~/services/services";

import styles from "./layout.module.scss";
import menu from "~/../public/svg/menu-dots.svg";

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  const router = useRouter();

  const { data: isAdmin, isLoading } = useQuery(
    QueryKey.CHECK_AUTH,
    authService.checkAuth
  );

  if (isLoading) {
    return <FullSpinner />;
  }

  if (!isAdmin) {
    router.push("/login");
  }

  const getSlug = (): Resource =>
    (pathname.split("/").pop() as Resource) || Resource.BARBERSHOPS;

  const isActive = (title: Resource) => getSlug() === title;

  const isResource = () => Object.values(Resource).includes(getSlug());

  return (
    isAdmin && (
      <section className={styles.layout}>
        <aside className={styles.sideBar}>
          <div className={styles.top}>
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
          </div>

          <div className={styles.bottom}>
            <div className={styles.nickname}>Admin</div>

            <Dropdown>
              <DropdownTrigger>
                <Image src={menu} alt="Menu icon" className={styles.menu} />
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="update">
                  <Link href={`/admin/settings`}>Change password</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </aside>

        <main className={styles.main}>
          <div className={styles.top}>
            <h2 className={styles.title}>{getSlug()}</h2>
            {isResource() && (
              <Link href={`/admin/${getSlug()}/add`}>
                <Button
                  title={`Add ${pluralize.singular(getSlug())}`}
                  className={styles.btn}
                />
              </Link>
            )}
          </div>

          {children}
        </main>
      </section>
    )
  );
};

export default AdminLayout;
