import { Link, useParams } from "@remix-run/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode
  to: string
}

export default function Anchor({ children, to }: Props) {
  const {locale} = useParams()


    return (
      <Link to={`/${locale}${to}`}>{children}</Link>
    )
}