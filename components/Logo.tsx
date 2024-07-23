import Link from "next/link";

const Logo = ({ color = 'white', size }: { color?: string, size?: number }) => {

    const scale = 60 / 68;

    return (
      <Link href="/">
        <svg
          width={size || 68}
          height={size ? scale * size : 60}
          viewBox="0 0 68 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1345_34228)">
            <path
              d="M19.7697 26.3183C22.2169 25.2828 23.2766 24.2888 23.2766 21.4861C23.2766 17.3097 20.5429 15.7875 15.5657 15.7875H7.62706V19.1632H15.369C18.0819 19.1632 19.4902 19.3047 19.4902 21.4343C19.4902 23.5639 18.0819 23.7814 15.369 23.7814H7.61328V33.9394H11.7103V27.0949H15.8867L18.4305 32.2136C18.6879 32.7323 19.085 33.1687 19.5772 33.4736C20.0694 33.7786 20.637 33.9399 21.2159 33.9394H23.7322L19.7697 26.3183Z"
              fill={color}
            />
            <path
              d="M23.8656 34.0187H21.2217C20.6258 34.0216 20.0412 33.8567 19.5346 33.543C19.028 33.2293 18.6199 32.7793 18.3569 32.2446L15.8338 27.1743H11.7989V34.0187H7.5293V23.7054H15.3575C18.2016 23.7054 19.3924 23.3913 19.3924 21.4446C19.3924 19.4979 18.2257 19.2598 15.3575 19.2598H7.5293V15.7115H15.568C20.9628 15.7115 23.3652 17.496 23.3652 21.4964C23.3652 24.3474 22.2468 25.3518 19.8929 26.3597L23.8656 34.0187ZM11.6263 27.0017H15.9408L15.9649 27.05L18.5088 32.1687C18.7587 32.6741 19.1455 33.0993 19.6251 33.3958C20.1047 33.6924 20.6578 33.8484 21.2217 33.8462H23.5826L19.6513 26.2734L19.7375 26.2388C22.1295 25.2241 23.1891 24.2991 23.1891 21.4964C23.1891 17.6133 20.8386 15.8841 15.5646 15.8841H7.69842V19.0975H15.354C17.9634 19.0975 19.5615 19.2114 19.5615 21.455C19.5615 23.6985 17.8944 23.8711 15.354 23.8711H7.69842V33.8392H11.6229L11.6263 27.0017Z"
              fill={color}
            />
            <path
              d="M37.0119 15.7977H32.9391L24.8555 33.9392H26.9817C27.5944 33.9399 28.1935 33.7594 28.7039 33.4204C29.2143 33.0814 29.613 32.599 29.8499 32.034L34.9617 19.1285L40.0493 32.0271C40.2854 32.5939 40.6842 33.0781 41.1953 33.4185C41.7065 33.7588 42.307 33.94 42.921 33.9392H45.1335L37.0119 15.7977Z"
              fill={color}
            />
            <path
              d="M45.2527 34.0187H42.9194C42.2885 34.0196 41.6715 33.8335 41.1462 33.484C40.621 33.1344 40.2111 32.6371 39.9683 32.0548L34.9601 19.3564L29.9276 32.0583C29.6849 32.6397 29.2754 33.1361 28.7508 33.485C28.2262 33.8339 27.61 34.0196 26.98 34.0187H24.7227L24.7744 33.8979L32.8822 15.7115H37.0655L37.0862 15.7598L45.2527 34.0187ZM34.9601 18.887L40.1374 32.003C40.3663 32.5538 40.7535 33.0243 41.25 33.3549C41.7465 33.6854 42.3299 33.8612 42.9263 33.86H44.9973L36.9654 15.9117H33.0099L25.0023 33.86H26.9938C27.5895 33.8601 28.1721 33.6843 28.6683 33.3545C29.1644 33.0248 29.5521 32.5558 29.7827 32.0065L34.9601 18.887Z"
              fill={color}
            />
            <path
              d="M46.3066 23.764V33.9392H47.2903C48.1142 33.9392 48.9044 33.612 49.4869 33.0294C50.0695 32.4468 50.3968 31.6567 50.3968 30.8328V27.1016H56.009C56.8329 27.1016 57.623 26.7744 58.2056 26.1918C58.7882 25.6092 59.1155 24.8191 59.1155 23.9952V23.7812L46.3066 23.764ZM46.3066 15.7977V19.1216H60.2441V15.7977H46.3066Z"
              fill={color}
            />
            <path
              d="M47.2907 34.0187H46.2207V23.664H59.2159V23.9643C59.215 24.8123 58.8775 25.6252 58.2775 26.2245C57.6776 26.8238 56.8643 27.1604 56.0163 27.1604H50.4938V30.8329C50.4892 31.6794 50.1497 32.4897 49.5495 33.0867C48.9493 33.6837 48.1372 34.0187 47.2907 34.0187ZM46.3933 33.8462H47.2907C48.0896 33.8434 48.8552 33.5253 49.4208 32.961C49.9864 32.3967 50.3063 31.6319 50.3108 30.8329V27.0017H56.0094C56.8113 27.0008 57.5802 26.682 58.1476 26.1153C58.715 25.5485 59.0346 24.78 59.0364 23.9781V23.8504H46.3864L46.3933 33.8462ZM60.3308 19.208H46.2207V15.7115H60.3204L60.3308 19.208ZM46.3933 19.0354H60.1582V15.8841H46.3933V19.0354Z"
              fill={color}
            />
            <path
              d="M33.9636 49.7269H33.8635L7.44163 44.5495C5.34771 44.1361 3.4618 43.0097 2.10497 41.3621C0.748149 39.7145 0.00426913 37.6476 0 35.5133V14.217C0.00361445 12.0825 0.747238 10.0152 2.10417 8.36754C3.46111 6.71983 5.34741 5.59361 7.44163 5.18076L33.8945 0.00338745H33.9946L60.42 5.18076C62.5139 5.59371 64.3997 6.72006 65.7561 8.36783C67.1124 10.0156 67.8553 12.0828 67.8581 14.217V35.5133C67.8547 37.6473 67.1115 39.7142 65.7553 41.3618C64.399 43.0094 62.5136 44.136 60.42 44.5495L33.9636 49.7269ZM33.9291 0.631557L7.56243 5.80893C5.60986 6.19386 3.85118 7.24395 2.58612 8.78028C1.32105 10.3166 0.627884 12.2441 0.624736 14.2343V35.5305C0.628027 37.5202 1.32133 39.4472 2.58643 40.983C3.85154 42.5187 5.61015 43.5682 7.56243 43.9524L33.9291 49.1298L60.2991 43.9524C62.2508 43.5675 64.0086 42.5177 65.2731 40.9821C66.5375 39.4464 67.2303 37.5198 67.2334 35.5305V14.2343C67.2298 12.2448 66.5368 10.318 65.2726 8.78188C64.0083 7.24575 62.2508 6.19518 60.2991 5.80893L33.9291 0.631557Z"
              fill={color}
            />
          </g>
          <path
            d="M1.66425 58.3808H0.876305V59.8941H0V55.4426H1.79679C1.99722 55.4263 2.19882 55.4527 2.38829 55.5201C2.57775 55.5875 2.75076 55.6943 2.89588 55.8335C3.041 55.9727 3.15493 56.1411 3.23014 56.3276C3.30535 56.5141 3.34012 56.7145 3.33217 56.9154C3.34775 57.1924 3.27812 57.4676 3.13265 57.704C2.98718 57.9403 2.77284 58.1264 2.51845 58.2372L3.57885 59.8831H2.60682L1.66425 58.3808ZM0.876305 57.5671H1.79679C1.88192 57.5702 1.96677 57.5557 2.04608 57.5247C2.1254 57.4936 2.19749 57.4466 2.2579 57.3865C2.3183 57.3264 2.36574 57.2546 2.39725 57.1755C2.42877 57.0963 2.44371 57.0116 2.44113 56.9264C2.44409 56.8398 2.42963 56.7535 2.39862 56.6725C2.36761 56.5916 2.32069 56.5177 2.26061 56.4552C2.20053 56.3927 2.12851 56.3429 2.04885 56.3088C1.96918 56.2746 1.88347 56.2568 1.79679 56.2563H0.876305V57.5671Z"
            fill={color}
          />
          <path
            d="M4.19336 55.4428H5.11016V59.8943H4.19336V55.4428Z"
            fill={color}
          />
          <path
            d="M5.91183 57.6707C5.89999 57.3626 5.95184 57.0553 6.06412 56.7681C6.17641 56.4809 6.34673 56.22 6.56442 56.0016C6.78212 55.7832 7.04252 55.612 7.32935 55.4988C7.61619 55.3856 7.92329 55.3328 8.23146 55.3437C8.65884 55.3205 9.08302 55.4292 9.44656 55.6551C9.8101 55.881 10.0954 56.2131 10.2639 56.6066L9.47227 57.019C9.3819 56.7702 9.21478 56.5566 8.99505 56.409C8.77532 56.2614 8.51435 56.1875 8.24986 56.1979C7.85926 56.1979 7.48465 56.3531 7.20845 56.6293C6.93225 56.9055 6.77708 57.2801 6.77708 57.6707C6.77708 58.0613 6.93225 58.4359 7.20845 58.7121C7.48465 58.9883 7.85926 59.1435 8.24986 59.1435C8.51655 59.1551 8.77988 59.0804 9.00076 58.9305C9.22163 58.7806 9.38828 58.5635 9.47595 58.3114L10.2786 58.7053C10.1137 59.1042 9.82962 59.4425 9.46516 59.6738C9.1007 59.9052 8.67369 60.0183 8.2425 59.9977C7.93342 60.0101 7.62512 59.9584 7.33697 59.8459C7.04883 59.7334 6.78707 59.5625 6.56817 59.344C6.34927 59.1254 6.17795 58.864 6.065 58.576C5.95205 58.288 5.89989 57.9798 5.91183 57.6707Z"
            fill={color}
          />
          <path
            d="M10.9375 55.4428H11.8543V57.1145H13.7358V55.4428H14.6526V59.8943H13.7358V57.954H11.8543V59.8943H10.9375V55.4428Z"
            fill={color}
          />
          <path
            d="M19.4696 55.4428L21.0786 59.8943H20.1249L19.8046 58.9407H18.1661L17.8458 59.8943H16.918L18.527 55.4428H19.4696ZM18.4312 58.1527H19.5358L18.9799 56.4996L18.4312 58.1527Z"
            fill={color}
          />
          <path
            d="M21.4766 58.1603V55.443H22.3934V58.0793C22.3934 58.7789 22.7616 59.1323 23.3323 59.1323C23.903 59.1323 24.2601 58.7641 24.2601 58.0793V55.432H25.1769V58.1492C25.1769 58.6399 24.982 59.1105 24.635 59.4575C24.288 59.8045 23.8174 59.9994 23.3267 59.9994C22.836 59.9994 22.3654 59.8045 22.0185 59.4575C21.6715 59.1105 21.4766 58.6399 21.4766 58.1492V58.1603Z"
            fill={color}
          />
          <path
            d="M26.1562 59.8943V55.4428H27.1099L29.0429 58.4768V55.4428H29.9082V59.8943H28.9545L27.0215 56.8604V59.8943H26.1562Z"
            fill={color}
          />
          <path
            d="M34.1421 55.4428V56.2823H32.8313V59.8943H31.9145V56.2823H30.6074V55.4428H34.1421Z"
            fill={color}
          />
          <path
            d="M35.9539 59.8943V58.1601L34.459 55.4428H35.431L36.4178 57.3759L37.4045 55.4428H38.3655L36.8707 58.1601V59.8943H35.9539Z"
            fill={color}
          />
          <path
            d="M40.627 55.4428H43.5026V56.2823H41.5622V57.2507H43.2669V58.0791H41.5622V59.8833H40.6454L40.627 55.4428Z"
            fill={color}
          />
          <path
            d="M44.3008 55.4428H45.2176V59.8943H44.3008V55.4428Z"
            fill={color}
          />
          <path
            d="M46.209 59.8943V55.4428H47.1626L49.0956 58.4768V55.4428H49.9609V59.8943H49.0073L47.0742 56.8604V59.8943H46.209Z"
            fill={color}
          />
          <path
            d="M53.1202 55.4428L54.7292 59.8943H53.7756L53.4589 58.9407H51.8168L51.5001 59.8943H50.5723L52.1813 55.4428H53.1202ZM52.0856 58.1527H53.1901L52.6379 56.4996L52.0856 58.1527Z"
            fill={color}
          />
          <path
            d="M55.3379 59.8943V55.4428H56.2878L58.2209 58.4768V55.4428H59.0861V59.8943H58.1288L56.1958 56.8604V59.8943H55.3379Z"
            fill={color}
          />
          <path
            d="M59.8903 57.6706C59.8785 57.3622 59.9304 57.0546 60.0429 56.7671C60.1554 56.4797 60.3261 56.2186 60.5442 56.0002C60.7623 55.7817 61.0231 55.6106 61.3104 55.4977C61.5977 55.3847 61.9052 55.3323 62.2136 55.3436C62.6386 55.3235 63.0596 55.4332 63.4207 55.6581C63.7817 55.8831 64.0658 56.2126 64.235 56.6029L63.4397 57.0152C63.3503 56.7658 63.1835 56.5515 62.9635 56.4038C62.7435 56.256 62.482 56.1826 62.2173 56.1942C61.8267 56.1942 61.4521 56.3493 61.1759 56.6255C60.8997 56.9017 60.7445 57.2764 60.7445 57.667C60.7445 58.0576 60.8997 58.4322 61.1759 58.7084C61.4521 58.9846 61.8267 59.1397 62.2173 59.1397C62.4844 59.151 62.748 59.0762 62.9694 58.9264C63.1908 58.7766 63.3582 58.5597 63.4471 58.3076L64.2461 58.7016C64.0823 59.1005 63.7989 59.439 63.435 59.6704C63.0711 59.9018 62.6444 60.0148 62.2136 59.9939C61.9056 60.0047 61.5987 59.952 61.3119 59.8391C61.0252 59.7262 60.7647 59.5554 60.5468 59.3375C60.3289 59.1196 60.1581 58.8591 60.0452 58.5723C59.9322 58.2856 59.8795 57.9787 59.8903 57.6706Z"
            fill={color}
          />
          <path
            d="M64.9121 55.4428H67.8577V56.2823H65.8363V57.166H67.6036V58.0055H65.8363V59.0549H67.8577V59.8943H64.9121V55.4428Z"
            fill={color}
          />
          <defs>
            <clipPath id="clip0_1345_34228">
              <rect width="67.8581" height="49.727" fill={color} />
            </clipPath>
          </defs>
        </svg>
      </Link>
    );
}

export default Logo;