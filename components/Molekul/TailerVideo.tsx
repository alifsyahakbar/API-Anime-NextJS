import React from "react";

export default function TailerVideo({ data, width, height }: any) {
  return (
    <>
      <div className="shadow-lg">
        <iframe
          width={width}
          height={height}
          src={data.trailer.embed_url}
          title="Tailer"
          allowFullScreen
        />
      </div>
    </>
  );
}
