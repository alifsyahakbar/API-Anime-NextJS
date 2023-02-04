import React from "react";
import SkeletonRekomendasi from "../atom/skeletonRekomendasi";
import SkeletonTable from "../atom/skeletonTable";

export default function SkeletonGabungan() {
  return (
    <div>
      <SkeletonRekomendasi></SkeletonRekomendasi>
      <SkeletonTable></SkeletonTable>
    </div>
  );
}
