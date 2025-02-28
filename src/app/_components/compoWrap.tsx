"use client"

import { useEffect, useState } from "react";

const CompoWrap = ({children}:{children:React.ReactNode}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <>{children}</>
  )
}
export default CompoWrap;