"use client";

import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: Icon;
}

const icons = {
  lessons: (
    <path
      d="M8 7.00003H4M8 12H4M8 17H4M12 3V21M9.2 21H16.8C17.9201 21 18.4802 21 18.908 20.782C19.2843 20.5903 19.5903 20.2843 19.782 19.908C20 19.4802 20 18.9201 20 17.8V6.20003C20 5.07993 20 4.51987 19.782 4.09205C19.5903 3.71573 19.2843 3.40977 18.908 3.21802C18.4802 3.00003 17.9201 3.00003 16.8 3.00003H9.2C8.07989 3.00003 7.51984 3.00003 7.09202 3.21802C6.71569 3.40977 6.40973 3.71573 6.21799 4.09205C6 4.51987 6 5.07993 6 6.20003V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  timer: (
    <path
      d="M4.51555 7C3.55827 8.4301 3 10.1499 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3V6M12 12L8 8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  arrowDown: (
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  ),
  phone: (
    <path
      d="M21 5.5C21 14.0604 14.0604 21 5.5 21C5.11378 21 4.73086 20.9859 4.35172 20.9581C3.91662 20.9262 3.69906 20.9103 3.50103 20.7963C3.33701 20.7019 3.18146 20.5345 3.09925 20.364C3 20.1582 3 19.9181 3 19.438V16.6207C3 16.2169 3 16.015 3.06645 15.842C3.12515 15.6891 3.22049 15.553 3.3441 15.4456C3.48403 15.324 3.67376 15.255 4.05321 15.117L7.26005 13.9509C7.70153 13.7904 7.92227 13.7101 8.1317 13.7237C8.31637 13.7357 8.49408 13.7988 8.64506 13.9058C8.81628 14.0271 8.93713 14.2285 9.17882 14.6314L10 16C12.6499 14.7999 14.7981 12.6489 16 10L14.6314 9.17882C14.2285 8.93713 14.0271 8.81628 13.9058 8.64506C13.7988 8.49408 13.7357 8.31637 13.7237 8.1317C13.7101 7.92227 13.7904 7.70153 13.9509 7.26005L13.9509 7.26005L15.117 4.05321C15.255 3.67376 15.324 3.48403 15.4456 3.3441C15.553 3.22049 15.6891 3.12515 15.842 3.06645C16.015 3 16.2169 3 16.6207 3H19.438C19.9181 3 20.1582 3 20.364 3.09925C20.5345 3.18146 20.7019 3.33701 20.7963 3.50103C20.9103 3.69907 20.9262 3.91662 20.9581 4.35173C20.9859 4.73086 21 5.11378 21 5.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  mail: (
    <path
      d="M20.9712 8C20.9712 8 16.95 13 12 13C7.05 13 3.02878 8 3.02878 8M7.8 19H16.2C17.8802 19 18.7202 19 19.362 18.673C19.9265 18.3854 20.3854 17.9265 20.673 17.362C21 16.7202 21 15.8802 21 14.2V9.8C21 8.11984 21 7.27976 20.673 6.63803C20.3854 6.07354 19.9265 5.6146 19.362 5.32698C18.7202 5 17.8802 5 16.2 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V14.2C3 15.8802 3 16.7202 3.32698 17.362C3.6146 17.9265 4.07354 18.3854 4.63803 18.673C5.27976 19 6.11984 19 7.8 19Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  address: (
    <>
      <path
        d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  logoColor: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3008 7.52161V0.521606H0.300781V65.0216C0.300781 92.912 22.9104 115.522 50.8008 115.522C78.6912 115.522 101.301 92.912 101.301 65.0216V0.521606H85.3008V7.52161H58.3008V0.521606H42.3008V7.52161H16.3008ZM42.3007 98.4666C27.4982 94.7161 16.5096 81.3966 16.3037 65.4769C18.009 65.8899 19.6836 66.4352 21.312 67.1097C25.4371 68.8184 29.1852 71.3228 32.3424 74.48C35.4996 77.6372 38.004 81.3853 39.7127 85.5104C41.4143 89.6185 42.2935 94.0204 42.3007 98.4666ZM43.6561 63.1663C46.1616 65.6717 48.3875 68.4302 50.3008 71.3923C52.2141 68.4302 54.44 65.6717 56.9454 63.1663C59.4509 60.6608 62.2094 58.4349 65.1715 56.5216C62.2094 54.6083 59.4509 52.3824 56.9454 49.8769C54.44 47.3715 52.2141 44.613 50.3008 41.6509C48.3875 44.613 46.1616 47.3715 43.6561 49.8769C41.1507 52.3824 38.3922 54.6083 35.4301 56.5216C38.3922 58.4349 41.1507 60.6608 43.6561 63.1663ZM85.3 65.2502C85.1938 81.6271 73.6769 95.2955 58.3008 98.7041V98.5216C58.3008 94.0567 59.1802 89.6354 60.8889 85.5104C62.5975 81.3853 65.102 77.6372 68.2591 74.48C71.4163 71.3228 75.1645 68.8184 79.2895 67.1097C81.2359 66.3035 83.2483 65.6819 85.3 65.2502ZM41.088 23.5216C40.7142 24.8832 40.2553 26.2229 39.7127 27.5328C38.004 31.6579 35.4996 35.406 32.3424 38.5632C29.1852 41.7204 25.4371 44.2248 21.312 45.9335C19.6826 46.6084 18.007 47.154 16.3008 47.567V23.5216H41.088ZM85.3008 47.7932V23.5216H59.5136C59.8873 24.8832 60.3463 26.2229 60.8889 27.5328C62.5975 31.6579 65.102 35.406 68.2591 38.5632C71.4163 41.7204 75.1645 44.2248 79.2895 45.9335C81.2362 46.7398 83.2488 47.3615 85.3008 47.7932Z"
        fill="var(--color-emerald-400)"
      ></path>
      <path
        d="M128.082 9.83881V52.5217H155.009V44.7872H136.962V9.83881H128.082Z"
        fill="var(--color-blue-950)"
      ></path>
      <path
        d="M263.696 21.24V52.5217H272.29V21.24H263.696Z"
        fill="var(--color-blue-950)"
      ></path>
      <path
        d="M263.696 9.83881V18.4327H272.29V9.83881H263.696Z"
        fill="var(--color-blue-950)"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M276.86 63.9801V21.24H284.881V24.4852C285.807 23.3946 286.953 22.5229 288.318 21.8702C290.113 20.9917 292.157 20.5525 294.448 20.5525C297.428 20.5525 300.12 21.2782 302.527 22.7296C304.933 24.181 306.843 26.148 308.256 28.6307C309.669 31.0752 310.376 33.8252 310.376 36.8808C310.376 39.8982 309.669 42.6483 308.256 45.1309C306.881 47.6136 304.99 49.5806 302.584 51.0321C300.178 52.4835 297.447 53.2092 294.391 53.2092C292.252 53.2092 290.266 52.8272 288.433 52.0633C287.304 51.5588 286.311 50.9109 285.454 50.1193V63.9801H276.86ZM293.36 45.4747C294.964 45.4747 296.377 45.1118 297.6 44.3861C298.822 43.6604 299.777 42.6483 300.464 41.3496C301.152 40.051 301.495 38.5614 301.495 36.8808C301.495 35.2002 301.152 33.7297 300.464 32.4693C299.777 31.1707 298.822 30.1585 297.6 29.4328C296.377 28.6689 294.964 28.287 293.36 28.287C291.832 28.287 290.457 28.6498 289.235 29.3755C288.051 30.1012 287.115 31.1134 286.428 32.412C285.778 33.7106 285.454 35.2002 285.454 36.8808C285.454 38.5614 285.778 40.051 286.428 41.3496C287.115 42.6483 288.051 43.6604 289.235 44.3861C290.457 45.1118 291.832 45.4747 293.36 45.4747Z"
        fill="var(--color-blue-950)"
      ></path>
      <path
        d="M316.956 50.8029C319.515 52.4071 322.513 53.2092 325.951 53.2092C328.395 53.2092 330.515 52.8081 332.31 52.006C334.105 51.1657 335.499 50.0199 336.493 48.5685C337.524 47.1171 338.039 45.4174 338.039 43.4695C338.039 41.216 337.352 39.3253 335.977 37.7975C334.602 36.2315 332.616 35.0666 330.019 34.3027L325.034 32.8131C324.27 32.5839 323.621 32.3356 323.086 32.0683C322.59 31.8009 322.227 31.4953 321.998 31.1516C321.768 30.8078 321.654 30.4259 321.654 30.0057C321.654 29.2036 321.959 28.5734 322.57 28.1151C323.22 27.6567 324.098 27.4276 325.206 27.4276C326.734 27.4276 328.09 27.8286 329.274 28.6307C330.496 29.3946 331.336 30.4259 331.795 31.7245L338.154 28.7453C337.199 26.148 335.557 24.1428 333.227 22.7296C330.935 21.2782 328.262 20.5525 325.206 20.5525C322.876 20.5525 320.814 20.9726 319.018 21.8129C317.223 22.615 315.829 23.7418 314.836 25.1932C313.843 26.6446 313.346 28.3443 313.346 30.2922C313.346 32.5075 314.034 34.4363 315.409 36.0787C316.784 37.6829 318.751 38.8479 321.31 39.5736L326.638 41.0632C327.326 41.2541 327.899 41.4833 328.357 41.7507C328.815 42.018 329.159 42.3236 329.388 42.6674C329.617 42.9729 329.732 43.3549 329.732 43.8132C329.732 44.6917 329.407 45.3792 328.758 45.8757C328.109 46.3723 327.173 46.6205 325.951 46.6205C324.27 46.6205 322.742 46.1431 321.367 45.1882C319.992 44.2334 318.904 42.9156 318.102 41.235L311.8 44.2142C312.716 46.9643 314.435 49.1605 316.956 50.8029Z"
        fill="var(--color-blue-950)"
      ></path>
      <path
        d="M374.035 52.5217V21.24H382.056V25.0189C382.643 23.8755 383.464 22.9597 384.52 22.2713C386.277 21.1254 388.377 20.5525 390.822 20.5525C393.419 20.5525 395.692 21.2209 397.64 22.5577C398.798 23.3152 399.703 24.2287 400.355 25.2981C401.183 24.088 402.169 23.1172 403.312 22.3858C405.221 21.1636 407.456 20.5525 410.015 20.5525C412.268 20.5525 414.254 21.049 415.973 22.0421C417.73 23.0352 419.105 24.4293 420.098 26.2244C421.091 27.9814 421.588 30.0439 421.588 32.412V52.5217H412.994V34.2454C412.994 33.0231 412.765 31.9728 412.307 31.0943C411.886 30.2158 411.275 29.5283 410.473 29.0318C409.671 28.5352 408.697 28.287 407.551 28.287C406.444 28.287 405.47 28.5352 404.629 29.0318C403.827 29.5283 403.197 30.2158 402.739 31.0943C402.319 31.9728 402.108 33.0231 402.108 34.2454V52.5217H393.515V34.2454C393.515 33.0231 393.285 31.9728 392.827 31.0943C392.407 30.2158 391.796 29.5283 390.994 29.0318C390.192 28.5352 389.218 28.287 388.072 28.287C386.964 28.287 385.99 28.5352 385.15 29.0318C384.348 29.5283 383.718 30.2158 383.259 31.0943C382.839 31.9728 382.629 33.0231 382.629 34.2454V52.5217H374.035Z"
        fill="var(--color-blue-950)"
      ></path>
      <path
        d="M352.686 53.2092C350.165 53.2092 348.007 52.6744 346.212 51.605C344.455 50.4973 343.118 48.9695 342.202 47.0216C341.285 45.0736 340.827 42.801 340.827 40.2038V21.24H349.421V39.5163C349.421 40.7003 349.65 41.7507 350.108 42.6674C350.605 43.5458 351.292 44.2333 352.171 44.7299C353.049 45.2264 354.042 45.4747 355.15 45.4747C356.296 45.4747 357.289 45.2264 358.129 44.7299C359.007 44.2333 359.676 43.5458 360.134 42.6674C360.631 41.7507 360.879 40.7003 360.879 39.5163V21.24H369.473V52.5217H361.452V48.7149C360.723 50.0884 359.691 51.1472 358.358 51.8914C356.754 52.7699 354.863 53.2092 352.686 53.2092Z"
        fill="var(--color-blue-950)"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M243.622 53.2092C240.529 53.2092 237.702 52.5026 235.143 51.0893C232.622 49.6761 230.598 47.7473 229.07 45.3028C227.581 42.8201 226.836 40.0128 226.836 36.8808C226.836 33.7106 227.581 30.9033 229.07 28.4588C230.598 26.0144 232.622 24.0855 235.143 22.6723C237.702 21.2591 240.529 20.5525 243.622 20.5525C246.716 20.5525 249.524 21.2591 252.044 22.6723C254.565 24.0855 256.571 26.0144 258.06 28.4588C259.588 30.9033 260.352 33.7106 260.352 36.8808C260.352 40.0128 259.588 42.8201 258.06 45.3028C256.571 47.7473 254.565 49.6761 252.044 51.0893C249.524 52.5026 246.716 53.2092 243.622 53.2092ZM243.622 45.4747C245.188 45.4747 246.544 45.1118 247.69 44.3861C248.874 43.6604 249.791 42.6483 250.44 41.3496C251.128 40.051 251.472 38.5614 251.472 36.8808C251.472 35.2002 251.128 33.7297 250.44 32.4693C249.791 31.1707 248.874 30.1585 247.69 29.4328C246.544 28.6689 245.188 28.287 243.622 28.287C242.056 28.287 240.681 28.6689 239.497 29.4328C238.313 30.1585 237.378 31.1707 236.69 32.4693C236.041 33.7297 235.716 35.2002 235.716 36.8808C235.716 38.5614 236.041 40.051 236.69 41.3496C237.378 42.6483 238.313 43.6604 239.497 44.3861C240.681 45.1118 242.056 45.4747 243.622 45.4747Z"
        fill="var(--color-blue-950)"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M201.316 63.9228C203.378 64.7249 205.613 65.126 208.019 65.126C211.036 65.126 213.691 64.5149 215.982 63.2926C218.312 62.0704 220.146 60.3707 221.483 58.1936C222.819 56.0547 223.488 53.6102 223.488 50.8602V21.24H215.467V24.5256C214.523 23.4182 213.453 22.5522 212.258 21.9275C210.578 21.0108 208.611 20.5525 206.357 20.5525C203.493 20.5525 200.934 21.2018 198.68 22.5004C196.427 23.7991 194.651 25.5942 193.352 27.8859C192.053 30.1394 191.404 32.7367 191.404 35.6777C191.404 38.6187 192.053 41.2541 193.352 43.584C194.651 45.8757 196.446 47.69 198.737 49.0268C201.029 50.3254 203.626 50.9748 206.529 50.9748C208.783 50.9748 210.75 50.5546 212.43 49.7143C213.341 49.2381 214.162 48.6329 214.894 47.8986V50.8602C214.894 52.197 214.607 53.3619 214.035 54.355C213.5 55.3481 212.717 56.0929 211.686 56.5894C210.654 57.1241 209.432 57.3915 208.019 57.3915C206.224 57.3915 204.677 56.9714 203.378 56.1311C202.079 55.2908 201.22 54.1449 200.8 52.6935L192.836 55.5009C193.486 57.4488 194.536 59.1294 195.987 60.5426C197.477 61.994 199.253 63.1207 201.316 63.9228ZM211.514 42.2663C210.444 42.8774 209.184 43.183 207.732 43.183C206.281 43.183 204.982 42.8774 203.836 42.2663C202.729 41.617 201.85 40.7385 201.201 39.6309C200.59 38.5232 200.284 37.2437 200.284 35.7923C200.284 34.3027 200.59 33.004 201.201 31.8964C201.85 30.7505 202.729 29.8721 203.836 29.2609C204.982 28.6116 206.281 28.287 207.732 28.287C209.146 28.287 210.387 28.6116 211.456 29.2609C212.526 29.8721 213.366 30.7505 213.977 31.8964C214.588 33.004 214.894 34.3027 214.894 35.7923C214.894 37.2819 214.588 38.5805 213.977 39.6882C213.404 40.7958 212.583 41.6552 211.514 42.2663Z"
        fill="var(--color-blue-950)"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M172.591 53.2092C169.497 53.2092 166.671 52.5026 164.112 51.0893C161.591 49.6761 159.567 47.7473 158.039 45.3028C156.549 42.8201 155.804 40.0128 155.804 36.8808C155.804 33.7106 156.549 30.9033 158.039 28.4588C159.567 26.0144 161.591 24.0855 164.112 22.6723C166.671 21.2591 169.497 20.5525 172.591 20.5525C175.685 20.5525 178.492 21.2591 181.013 22.6723C183.534 24.0855 185.539 26.0144 187.029 28.4588C188.557 30.9033 189.32 33.7106 189.32 36.8808C189.32 40.0128 188.557 42.8201 187.029 45.3028C185.539 47.7473 183.534 49.6761 181.013 51.0893C178.492 52.5026 175.685 53.2092 172.591 53.2092ZM172.591 45.4747C174.157 45.4747 175.513 45.1118 176.659 44.3861C177.843 43.6604 178.76 42.6483 179.409 41.3496C180.096 40.051 180.44 38.5614 180.44 36.8808C180.44 35.2002 180.096 33.7297 179.409 32.4693C178.76 31.1707 177.843 30.1585 176.659 29.4328C175.513 28.6689 174.157 28.287 172.591 28.287C171.025 28.287 169.65 28.6689 168.466 29.4328C167.282 30.1585 166.346 31.1707 165.659 32.4693C165.009 33.7297 164.685 35.2002 164.685 36.8808C164.685 38.5614 165.009 40.051 165.659 41.3496C166.346 42.6483 167.282 43.6604 168.466 44.3861C169.65 45.1118 171.025 45.4747 172.591 45.4747Z"
        fill="var(--color-blue-950)"
      ></path>
      <path
        d="M134.429 102.514C136.349 103.57 138.573 104.098 141.101 104.098C143.661 104.098 145.885 103.57 147.773 102.514C149.693 101.458 151.181 100.018 152.237 98.1936C153.293 96.3376 153.821 94.2256 153.821 91.8576V67.7616H149.981V91.8576C149.981 93.5856 149.597 95.1056 148.829 96.4176C148.093 97.6976 147.053 98.7056 145.709 99.4416C144.397 100.146 142.861 100.498 141.101 100.498C139.341 100.498 137.789 100.146 136.445 99.4416C135.133 98.7056 134.093 97.6976 133.325 96.4176C132.589 95.1056 132.221 93.5856 132.221 91.8576V67.7616H128.381V91.8576C128.381 94.2256 128.909 96.3376 129.965 98.1936C131.021 100.018 132.509 101.458 134.429 102.514Z"
        fill="var(--color-blue-950)"
      ></path>
      <path
        d="M186.242 77.7936V103.522H189.842V77.7936H186.242Z"
        fill="var(--color-blue-950)"
      ></path>
      <path
        d="M186.242 67.7616V73.0416H189.842V67.7616H186.242Z"
        fill="var(--color-blue-950)"
      ></path>
      <path
        d="M284.511 103.522V77.7936H288.111V103.522H284.511Z"
        fill="var(--color-blue-950)"
      ></path>
      <path
        d="M284.511 73.0416V67.7616H288.111V73.0416H284.511Z"
        fill="var(--color-blue-950)"
      ></path>
      <path
        d="M298.551 101.794C299.799 103.138 301.575 103.81 303.879 103.81C304.167 103.81 304.551 103.778 305.031 103.714C305.511 103.682 305.943 103.618 306.327 103.522V100.306C306.071 100.338 305.767 100.37 305.415 100.402C305.063 100.434 304.759 100.45 304.503 100.45C303.447 100.45 302.599 100.258 301.959 99.8736C301.351 99.4896 300.919 98.9776 300.663 98.3376C300.407 97.6656 300.279 96.8976 300.279 96.0336V81.3936H305.943V77.7936H300.279V71.8416H296.679V74.0016C296.679 75.0896 296.359 76.0016 295.719 76.7376C295.079 77.4416 294.215 77.7936 293.127 77.7936H291.927V81.3936H296.679V96.0336C296.679 98.5296 297.303 100.45 298.551 101.794Z"
        fill="var(--color-blue-950)"
      ></path>
      <path
        d="M310.153 113.938C310.697 114.034 311.225 114.082 311.737 114.082C313.433 114.082 314.873 113.73 316.057 113.026C317.241 112.354 318.217 111.458 318.985 110.338C319.785 109.218 320.441 108.034 320.953 106.786L332.713 77.7936H328.729L320.351 99.0314L311.929 77.7936H308.041L318.331 103.541L317.401 105.73C316.601 107.586 315.785 108.834 314.953 109.474C314.121 110.146 312.921 110.482 311.353 110.482C310.841 110.482 310.329 110.434 309.817 110.338C309.337 110.274 308.937 110.226 308.617 110.194V113.554C309.129 113.746 309.641 113.874 310.153 113.938Z"
        fill="var(--color-blue-950)"
      ></path>
      <path
        d="M263.977 102.226C265.833 103.474 267.993 104.098 270.457 104.098C272.249 104.098 273.833 103.794 275.209 103.186C276.585 102.546 277.657 101.666 278.425 100.546C279.225 99.4256 279.625 98.1616 279.625 96.7536C279.625 95.0256 279.033 93.5216 277.849 92.2416C276.697 90.9616 275.081 90.0176 273.001 89.4096L268.729 88.1616C268.281 88.0336 267.753 87.8416 267.145 87.5856C266.569 87.3296 266.057 86.9456 265.609 86.4336C265.161 85.9216 264.937 85.2336 264.937 84.3696C264.937 83.2496 265.369 82.3216 266.233 81.5856C267.097 80.8496 268.249 80.4816 269.689 80.4816C271.161 80.4816 272.489 80.8976 273.673 81.7296C274.889 82.5296 275.817 83.6496 276.457 85.0896L279.529 83.6496C278.793 81.6336 277.529 80.0656 275.737 78.9456C273.977 77.7936 272.009 77.2176 269.833 77.2176C268.233 77.2176 266.777 77.5216 265.465 78.1296C264.153 78.7376 263.113 79.6016 262.345 80.7216C261.577 81.8416 261.193 83.1536 261.193 84.6576C261.193 86.2576 261.721 87.6656 262.777 88.8816C263.833 90.0976 265.545 91.0416 267.913 91.7136L271.609 92.7696C272.121 92.8976 272.713 93.1056 273.385 93.3936C274.057 93.6816 274.649 94.0976 275.161 94.6416C275.673 95.1536 275.929 95.8576 275.929 96.7536C275.929 97.9696 275.401 98.9616 274.345 99.7296C273.289 100.466 271.993 100.834 270.457 100.834C268.857 100.834 267.385 100.37 266.041 99.4416C264.729 98.5136 263.705 97.2656 262.969 95.6976L259.945 97.1376C260.777 99.2816 262.121 100.978 263.977 102.226Z"
        fill="var(--color-blue-950)"
      ></path>
      <path
        d="M246.75 103.522V77.7936H250.35V80.5773C250.924 79.7398 251.676 79.0519 252.606 78.5136C253.854 77.8096 255.358 77.4576 257.118 77.4576H258.75V81.0576H256.494C254.638 81.0576 253.15 81.6336 252.03 82.7856C250.91 83.9376 250.35 85.5696 250.35 87.6816V103.522H246.75Z"
        fill="var(--color-blue-950)"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M223.843 102.37C225.795 103.522 227.971 104.098 230.371 104.098C232.131 104.098 233.731 103.81 235.171 103.234C236.643 102.626 237.907 101.842 238.963 100.882C240.019 99.8896 240.803 98.8176 241.315 97.6656L238.243 96.0336C237.443 97.3776 236.403 98.4976 235.123 99.3936C233.843 100.29 232.259 100.738 230.371 100.738C228.739 100.738 227.203 100.322 225.763 99.4896C224.355 98.6576 223.235 97.4896 222.403 95.9856C221.756 94.7447 221.423 93.3367 221.404 91.7616H241.651C241.715 91.3456 241.763 90.9456 241.795 90.5616C241.827 90.1456 241.843 89.7776 241.843 89.4576C241.843 87.9216 241.571 86.4336 241.027 84.9936C240.483 83.5216 239.699 82.2096 238.675 81.0576C237.651 79.8736 236.403 78.9456 234.931 78.2736C233.491 77.5696 231.843 77.2176 229.987 77.2176C227.651 77.2176 225.539 77.7936 223.651 78.9456C221.795 80.0976 220.323 81.6816 219.235 83.6976C218.147 85.6816 217.603 87.9696 217.603 90.5616C217.603 93.1536 218.163 95.4736 219.283 97.5216C220.403 99.5696 221.923 101.186 223.843 102.37ZM237.984 88.4016H221.461C221.58 87.2668 221.878 86.2428 222.355 85.3296C223.123 83.8256 224.179 82.6576 225.523 81.8256C226.899 80.9936 228.387 80.5776 229.987 80.5776C231.587 80.5776 233.027 80.9936 234.307 81.8256C235.587 82.6256 236.563 83.7296 237.235 85.1376C237.741 86.1264 237.99 87.2145 237.984 88.4016Z"
        fill="var(--color-blue-950)"
      ></path>
      <path
        d="M202.635 103.522L192.603 77.7936H196.635L204.437 98.628L212.283 77.7936H216.363L206.235 103.522H202.635Z"
        fill="var(--color-blue-950)"
      ></path>
      <path
        d="M160.166 103.522V77.7936H163.766V80.9804C164.365 80.0569 165.133 79.2827 166.07 78.6576C167.542 77.6976 169.238 77.2176 171.158 77.2176C172.982 77.2176 174.614 77.6336 176.054 78.4656C177.526 79.2976 178.678 80.4496 179.51 81.9216C180.374 83.3616 180.806 84.9936 180.806 86.8176V103.522H177.206V88.2096C177.206 86.6416 176.918 85.3136 176.342 84.2256C175.798 83.1376 175.014 82.3056 173.99 81.7296C172.998 81.1216 171.846 80.8176 170.534 80.8176C169.222 80.8176 168.054 81.1216 167.03 81.7296C166.006 82.3056 165.206 83.1536 164.63 84.2736C164.054 85.3616 163.766 86.6736 163.766 88.2096V103.522H160.166Z"
        fill="var(--color-blue-950)"
      ></path>
    </>
  ),
  emptyFolder: (
    <path
      d="M10 11L14 15M14 11L10 15M12.0627 6.06274L11.9373 5.93726C11.5914 5.59135 11.4184 5.4184 11.2166 5.29472C11.0376 5.18506 10.8425 5.10425 10.6385 5.05526C10.4083 5 10.1637 5 9.67452 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V10.2C21 9.0799 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H14.3255C13.8363 7 13.5917 7 13.3615 6.94474C13.1575 6.89575 12.9624 6.81494 12.7834 6.70528C12.5816 6.5816 12.4086 6.40865 12.0627 6.06274Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

const Icon = ({ name, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      {icons[name]}
    </svg>
  );
};

export default Icon;
