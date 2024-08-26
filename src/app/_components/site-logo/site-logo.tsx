import { TSGT_Link } from "@/app/_components/commom/Link/link";
import "./site-logo.css";

export const SiteLogo = () => {
  return (
    <>
      <TSGT_Link url="/">
        <div className="flex items-center">
          <svg
            version="1.1"
            viewBox="0 0 1259 1160"
            xmlns="http://www.w3.org/2000/svg"
            className="logo-svg"
          >
            <path transform="translate(0)" d="m0 0h1259v1160h-1259z" />
            <path
              transform="translate(436,325)"
              d="m0 0h11l8 6 3 3v2h2l15 26 8 14 11 19 6 10v3h2l11 20 6 10v3h2l10 18 2 3v3h2l2 7h2l11 20 6 10 5 9 11 19 14 24 9 16 5 9v12l-3 7-14 25-7 11-1 3h-2l-1 5-10 17-11 19-14 24-8 13-5 10-4 7-6 10-15 26-12 21-3 5-8 14-9 16h-2l-2 7-8 13-13 23-6 10-2 3h-2v2l-9 6-5 1h-277l-12-3-5-4v-2h-2l-2-5v-9l4-12 6-10 6-9 5-10 5-9h2l1-5 1-2h2l1-5 4-7 6-10 5-9 7-11 6-11 2-4h2l1-5 6-10 14-24 8-14 13-23 6-10 10-17 9-16 2-4h2l2-6 8-14 14-24 9-16 12-21 1-2h2l2-6 11-20h2l2-6 13-23 9-15 10-18 1-2h2l1-5 9-15 13-23 11-19 1-2h2l1-4 6-11 14-24 8-14 6-8 6-5z"
              className="logo-traingle-1"
            />
            <path
              transform="translate(625)"
              d="m0 0h9l6 3v2l4 1 9 13 6 10 1 5h2l6 11v3h2l6 11 11 19v3h2l10 18 6 11v2h2l11 20 8 14 2 3v3h2l13 24 8 13 8 14 6 10 6 11 8 14 5 9 8 13 15 26 5 9 13 22 6 11 8 13 4 8 5 8 6 11 8 14 9 15v3h2l11 20 10 17 8 14 6 11v2h2l9 16 6 11 7 12 20 35 2 6v8l-3 6-5 3-8 2h-286l-8-3-7-6-5-8-5-9-14-24-7-13-6-10-9-16-9-15-9-16-5-9-9-15v-3h-2l-6-11-6-10-6-11-9-16-9-15-24-42-8-13-6-11-9-15-3-10 1-10 6-11 15-25 6-11 21-36 9-16 5-9h2l1-5 7-11 6-11 11-19 10-17 3-6h2l2-6 6-11 9-15 6-11h2l1-5 9-15 1-2h2v-2h2v-2h2v-2z"
              className="logo-traingle-2"
            />
            <path
              transform="translate(651,608)"
              d="m0 0h332l8 4 5 4 4 6v2h2l6 10 6 11 5 8 6 11 8 14 9 15 6 11 6 10 16 28 9 15v3h2l6 11 6 10 6 11 6 10 7 12v3h2l2 4v3h2l9 16 4 7 7 12 2 6v13l-1 2h-2l-1 3h-2v2l-11 3-534 1h-73l-12-3-5-4v-2h-2l-2-6 1-10 4-10 6-10 11-19 13-23 6-9 4-8 12-21 2-4h2l2-6 9-16 8-13 6-11 10-18h2l1-5 7-11 6-11 7-13h2l1-5 7-11 6-11 7-12 3-1 2-4z"
              className="logo-traingle-3"
            />

            {/* <text className="logo-text-main">T S</text>

            <text className="logo-text-base">global tech</text> */}
          </svg>
          <span className="text-brandColorPrimary text-3xl">
            TS Global Tech
          </span>
        </div>
      </TSGT_Link>
    </>
  );
};
