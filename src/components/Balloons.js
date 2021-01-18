import React from "react";

const Balloons = ({speed1, speed2, color1, color2, color3}) => {
  return (
    <>
      <div className="balloon1 balloon" style={{animationDuration: `${speed1}`}}>
        <svg
          width="125"
          height="343"
          viewBox="0 0 125 343"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 68.5593C0 106.424 27.9822 166.855 62.5 166.855C97.0178 166.855 125 106.424 125 68.5593C125 50.3763 118.415 32.9379 106.694 20.0806C94.9732 7.2232 79.076 0 62.5 0C45.924 0 30.0268 7.2232 18.3058 20.0806C6.5848 32.9379 0 50.3763 0 68.5593Z"
            fill="#D20000"
          />
          <path
            d="M60.1852 169.293C68.0395 172.26 69.9198 184.009 67.2182 192.625C64.5167 201.242 58.7949 208.39 55.9159 216.937C54.6022 221.248 53.6592 225.684 53.0992 230.187C51.4545 240.91 49.8053 251.821 51.0726 262.605C52.2747 272.835 56.053 282.479 60.2682 291.699C68.4318 309.551 78.3618 326.363 89.8788 341.831"
            stroke="#2F2E41"
            stroke-width="2"
          />
          <path
            d="M56.4758 173.463C60.4919 170.636 64.508 170.636 68.524 173.463V160.247H56.4758V173.463Z"
            fill="#D20000"
          />
          <path
            d="M68.4926 166.575C66.6205 167.615 64.5501 168.152 62.4517 168.143C60.3534 168.133 58.2871 167.578 56.4229 166.521"
            stroke="#2F2E41"
            stroke-width="2"
          />
          <path
            opacity="0.4"
            d="M36.521 56.9952C43.7988 56.9952 49.6987 49.2289 49.6987 39.6488C49.6987 30.0687 43.7988 22.3025 36.521 22.3025C29.2431 22.3025 23.3433 30.0687 23.3433 39.6488C23.3433 49.2289 29.2431 56.9952 36.521 56.9952Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="balloon2 balloon" style={{animationDuration: `${speed2}`}}>
        <svg
          width="180"
          height="400"
          viewBox="0 0 215 441"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M215 188.866C215 223.586 186.794 279 152 279C117.206 279 89 223.586 89 188.866C89 172.193 95.6375 156.203 107.452 144.413C119.267 132.623 135.291 126 152 126C168.709 126 184.733 132.623 196.548 144.413C208.362 156.203 215 172.193 215 188.866Z"
            fill="#D20000"
          />
          <path
            d="M154.257 281C146.253 283.734 144.337 294.561 147.09 302.501C149.843 310.442 155.673 317.029 158.607 324.905C159.946 328.878 160.906 332.966 161.477 337.116C163.153 346.997 164.834 357.052 163.542 366.99C162.317 376.417 158.467 385.305 154.172 393.802C145.854 410.253 135.735 425.745 124 440"
            stroke="#2F2E41"
            stroke-width="2"
          />
          <path
            d="M158 285C154 282.433 150 282.433 146 285V273H158V285Z"
            fill="#FF6584"
          />
          <path
            d="M146 279.033C147.861 279.675 149.92 280.006 152.006 280C154.092 279.994 156.147 279.651 158 279"
            stroke="#2F2E41"
            stroke-width="2"
          />
          <path
            opacity="0.4"
            d="M178 178C185.18 178 191 170.837 191 162C191 153.163 185.18 146 178 146C170.82 146 165 153.163 165 162C165 170.837 170.82 178 178 178Z"
            fill="white"
          />
          <path
            d="M65.2567 155C57.2535 157.734 55.3375 168.561 58.0903 176.501C60.8431 184.442 66.6734 191.029 69.6071 198.905C70.9456 202.878 71.9065 206.966 72.4772 211.116C74.153 220.997 75.8335 231.052 74.5422 240.99C73.3173 250.417 69.4674 259.305 65.1722 267.802C56.8538 284.253 46.7354 299.745 35 314"
            stroke="#2F2E41"
            stroke-width="2"
          />
          <path
            d="M126 62.8663C126 97.5865 97.7939 153 63 153C28.2061 153 0 97.5865 0 62.8663C0 46.1931 6.63747 30.2028 18.4523 18.4131C30.267 6.6234 46.2914 0 63 0C79.7086 0 95.7329 6.6234 107.548 18.4131C119.363 30.2028 126 46.1931 126 62.8663Z"
            fill="#DCDCDC"
          />
          <path d="M69 159C65 156.433 61 156.433 57 159V147H69V159Z" fill="#4741A9" />
          <path
            d="M57 153.033C58.8613 153.675 60.9197 154.006 63.0059 154C65.0922 153.994 67.1465 153.651 69 153"
            stroke="#2F2E41"
            stroke-width="2"
          />
          <path
            opacity="0.4"
            d="M89.5 52C96.9558 52 103 44.8366 103 36C103 27.1634 96.9558 20 89.5 20C82.0442 20 76 27.1634 76 36C76 44.8366 82.0442 52 89.5 52Z"
            fill="white"
          />
        </svg>
      </div>
    </>
  );
};

export default Balloons;
