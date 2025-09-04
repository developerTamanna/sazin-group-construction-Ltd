import ShortContact from "@/components/ShortContact";
import React from "react";
export default function CallToAction() {
  const header='Build Together'
  const desc='Partner with Sazin Construction Ltd. for reliability, safety, and excellence.'
  return (
    <ShortContact header={header} desc={desc} />
  );
}