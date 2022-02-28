import * as React from "react";

function SvgEye(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <defs>
        <path
          d="M8 13.5c3.866 0 7-5.25 7-5.25S11.866 3 8 3 1 8.25 1 8.25s3.134 5.25 7 5.25zm0-8.75c-.96 0-1.783.343-2.47 1.03-.687.687-1.03 1.51-1.03 2.47 0 .96.343 1.783 1.03 2.47.687.687 1.51 1.03 2.47 1.03.96 0 1.783-.343 2.47-1.03.687-.687 1.03-1.51 1.03-2.47 0-.96-.343-1.783-1.03-2.47C9.783 5.093 8.96 4.75 8 4.75zm.727.875c-.159.064-.304.161-.435.292a1.265 1.265 0 00-.383.93c0 .363.128.673.383.929.255.255.565.383.93.383.363 0 .673-.128.929-.383.178-.179.295-.384.348-.616.145.333.217.696.217 1.09 0 .753-.264 1.395-.793 1.923A2.619 2.619 0 018 10.966a2.619 2.619 0 01-1.923-.793 2.619 2.619 0 01-.793-1.923c0-.753.264-1.395.793-1.923A2.619 2.619 0 018 5.534c.255 0 .498.03.727.091z"
          id="eye_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="eye_svg__b" fill="#fff">
          <use xlinkHref="#eye_svg__a" />
        </mask>
        <use fill="currentColor" xlinkHref="#eye_svg__a" />
        <g mask="url(#eye_svg__b)" fill="currentColor" fillRule="nonzero">
          <rect width={24} height={24} rx={2} />
        </g>
      </g>
    </svg>
  );
}

export default SvgEye;
