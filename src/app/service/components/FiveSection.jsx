const FiveSection = () => {
  return (
    <div>
          <div className="flex items-center justify-center mx-4 sm:mx-auto my-10"> 
        <div className="flex flex-col items-center container">
          <p className="text-zinc-700 text-base font-normal font-['Poppins'] leading-7">
            BENEFITS
          </p>
          <h1 className="text-zinc-700 text-[22px] sm:text-[33.18px] font-bold font-['Poppins'] leading-9 sm:leading-10"> 
            OUR SERVICE
          </h1> 

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
            <div className="flex gap-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="158" height="64" viewBox="0 0 48 64" fill="none">
          <g clip-path="url(#clip0_19_447)">
            <path d="M10.1187 59.0288C9.58372 61.1738 10.8862 63.345 13.0287 63.88C13.355 63.9625 13.6812 63.9987 14.0037 63.9987C15.795 63.9987 17.425 62.7863 17.8812 60.97L21.0362 48.3488L14.4387 41.7513L10.1187 59.0288ZM11.98 34.5137L17.125 14.625C17.3987 13.5725 16.7325 12.5063 15.635 12.2425C10.15 10.9275 4.59122 14.1263 3.21997 19.3888L0.0612193 31.655C-0.212531 32.7075 0.453719 33.7738 1.55122 34.0375L9.49622 35.9437C10.595 36.2062 11.7062 35.5662 11.98 34.5137ZM46 20H44C42.895 20 42 20.895 42 22V24H37.6562L31.8087 18.1525C30.4225 16.7638 28.5762 16 26.6137 16C23.2362 16 20.305 18.2875 19.485 21.565L16.12 35.03C15.9526 35.7002 15.9616 36.4023 16.146 37.068C16.3305 37.7337 16.6841 38.3403 17.1725 38.8288L28 49.6562V60C28 62.2088 29.7912 64 32 64C34.2087 64 36 62.2088 36 60V49.6562C36 47.52 35.1675 45.5112 33.6562 44L27.8037 38.1475C27.8225 38.085 27.865 38.0362 27.8812 37.9712L30.3675 28.025L33.1712 30.8288C33.9212 31.5788 34.9387 32.0013 35.9987 32.0013H41.9987V62.0013C41.9987 63.1063 42.8937 64.0013 43.9987 64.0013H45.9987C47.1037 64.0013 47.9987 63.1063 47.9987 62.0013V22C48 20.895 47.105 20 46 20ZM30 12C33.3137 12 36 9.31375 36 6C36 2.68625 33.3137 0 30 0C26.6862 0 24 2.68625 24 6C24 9.31375 26.6862 12 30 12Z" fill="#3D3E48"/>
          </g>
          <defs>
            <clipPath id="clip0_19_447">
              <rect width="48" height="64" fill="white"/>
            </clipPath>
          </defs>
        </svg>
              <div className=" space-y-5">
                <h1 className="text-zinc-700 text-[27.65px] font-bold font-['Poppins'] leading-[33.18px] ">
                  Hiking
                </h1>
                <p className="w-full text-zinc-700 text-base font-normal font-['Poppins'] leading-7">
                  Phasellus enim libero, blandit vel sapien vitae, condimentum
                  ultricies magna et. Quisque euismod orci ut et lobortis.
                </p>
                <button
                  type="submit"
                  className="text-white text-base font-bold font-['Poppins'] leading-7  px-5 py-[5px] bg-[#43B97F]  rounded-lg"
                >
                  Read More
                </button>
              </div>
            </div>
            <div className="flex gap-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="158" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M14 24V18M21 24V18M23 18H12M44 4H28V12H44V4ZM44 12V34C44 35.11 43.11 36 42 36H8C5.79 36 4 34.21 4 32V26C4 21.58 7.58 18 12 18H28V12H44ZM9 44C10.0609 44 11.0783 43.5786 11.8284 42.8284C12.5786 42.0783 13 41.0609 13 40C13 38.9391 12.5786 37.9217 11.8284 37.1716C11.0783 36.4214 10.0609 36 9 36C7.93913 36 6.92172 36.4214 6.17157 37.1716C5.42143 37.9217 5 38.9391 5 40C5 41.0609 5.42143 42.0783 6.17157 42.8284C6.92172 43.5786 7.93913 44 9 44V44ZM19.33 44C20.3909 44 21.4083 43.5786 22.1584 42.8284C22.9086 42.0783 23.33 41.0609 23.33 40C23.33 38.9391 22.9086 37.9217 22.1584 37.1716C21.4083 36.4214 20.3909 36 19.33 36C18.2691 36 17.2517 36.4214 16.5016 37.1716C15.7514 37.9217 15.33 38.9391 15.33 40C15.33 41.0609 15.7514 42.0783 16.5016 42.8284C17.2517 43.5786 18.2691 44 19.33 44ZM29.67 44C30.7309 44 31.7483 43.5786 32.4984 42.8284C33.2486 42.0783 33.67 41.0609 33.67 40C33.67 38.9391 33.2486 37.9217 32.4984 37.1716C31.7483 36.4214 30.7309 36 29.67 36C28.6091 36 27.5917 36.4214 26.8416 37.1716C26.0914 37.9217 25.67 38.9391 25.67 40C25.67 41.0609 26.0914 42.0783 26.8416 42.8284C27.5917 43.5786 28.6091 44 29.67 44ZM40 44C41.0609 44 42.0783 43.5786 42.8284 42.8284C43.5786 42.0783 44 41.0609 44 40C44 38.9391 43.5786 37.9217 42.8284 37.1716C42.0783 36.4214 41.0609 36 40 36C38.9391 36 37.9217 36.4214 37.1716 37.1716C36.4214 37.9217 36 38.9391 36 40C36 41.0609 36.4214 42.0783 37.1716 42.8284C37.9217 43.5786 38.9391 44 40 44V44Z" stroke="#3D3E48" stroke-width="4" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
              <div className=" space-y-5">
                <h1 className="text-zinc-700 text-[27.65px] font-bold font-['Poppins'] leading-[33.18px] ">
                  Staking
                </h1>
                <p className="w-full text-zinc-700 text-base font-normal font-['Poppins'] leading-7">
                  Phasellus enim libero, blandit vel sapien vitae, condimentum
                  ultricies magna et. Quisque euismod orci ut et lobortis.
                </p>
                <button
                  type="submit"
                  className="text-white text-base font-bold font-['Poppins'] leading-7  px-5 py-[5px] bg-[#43B97F]  rounded-lg"
                >
                  Read More
                </button>
              </div>
            </div>
            <div className="flex gap-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="158" height="50" viewBox="0 0 50 50" fill="none">
  <path d="M6.43197 21.55C6.08993 22.2546 5.91246 23.0278 5.91297 23.811L6.10597 35.936L1.90097 44.96C1.74873 45.2408 1.64686 45.5461 1.59997 45.862C1.5458 46.2167 1.56227 46.5786 1.64842 46.9269C1.73458 47.2752 1.88872 47.6031 2.10199 47.8916C2.31526 48.1801 2.58345 48.4237 2.89115 48.6082C3.19885 48.7928 3.53999 48.9147 3.89497 48.967C4.44796 49.0518 5.01365 48.9642 5.51515 48.7163C6.01665 48.4683 6.42963 48.0719 6.69797 47.581L11.324 37.717C11.42 37.488 11.506 37.247 11.541 36.983L11.566 36.611L11.53 29.115L18.639 32.207L19.787 39.533C19.9062 40.0714 20.186 40.5609 20.5893 40.9369C20.9926 41.3129 21.5006 41.5577 22.046 41.639C22.7617 41.7447 23.4903 41.5641 24.0739 41.1364C24.6576 40.7088 25.0492 40.0684 25.164 39.354C25.199 39.101 25.199 38.848 25.175 38.608L23.774 29.764C23.6898 29.3397 23.5071 28.9411 23.2407 28.6003C22.9742 28.2595 22.6314 27.9861 22.24 27.802L15.886 24.99L19.932 17.976L21.939 20.515C22.144 20.743 22.41 20.936 22.711 21.056L30.359 23.281C30.8536 23.389 31.3706 23.3193 31.819 23.0842C32.2674 22.849 32.6186 22.4634 32.811 21.995C32.9175 21.7333 32.9714 21.4532 32.9696 21.1706C32.9678 20.888 32.9104 20.6086 32.8005 20.3483C32.6906 20.088 32.5305 19.8518 32.3293 19.6534C32.1281 19.455 31.8898 19.2982 31.628 19.192L31.519 19.156L24.874 17.207L19.872 11.228C19.1001 10.4047 18.0757 9.86245 16.961 9.687C15.9984 9.54347 15.0149 9.68453 14.1315 10.0928C13.2481 10.5011 12.5033 11.1588 11.989 11.985L6.43197 21.55ZM28.371 38.934L27.888 42.567L14.732 45.754L14.859 48H46.945C47.2142 48.0012 47.4809 47.9492 47.73 47.8471C47.9791 47.745 48.2056 47.5948 48.3965 47.405C48.5874 47.2152 48.7389 46.9896 48.8425 46.7411C48.9461 46.4927 48.9996 46.2262 49 45.957L48.964 2.888L44.568 1.866L42.042 13.189L37.819 14.957L34.074 25.398L37.632 33.387L36.63 36.454L28.371 38.934ZM19.438 9.157C21.697 9.157 23.533 7.329 23.533 5.079C23.532 2.83 21.697 1 19.438 1C17.179 1 15.342 2.83 15.342 5.079C15.341 7.329 17.178 9.157 19.438 9.157ZM11.289 9.795C11.3652 9.66231 11.4145 9.51584 11.4339 9.36402C11.4533 9.21221 11.4425 9.05805 11.4021 8.91044C11.3616 8.76283 11.2924 8.62468 11.1983 8.50395C11.1042 8.38322 10.9872 8.2823 10.854 8.207L8.87197 7.052C8.60095 6.8985 8.2804 6.85787 7.97966 6.9389C7.67892 7.01994 7.42217 7.21612 7.26497 7.485L1.15297 17.989C1.07705 18.1217 1.02806 18.2681 1.00879 18.4198C0.989514 18.5715 1.00034 18.7255 1.04065 18.873C1.08097 19.0205 1.14997 19.1586 1.24371 19.2794C1.33745 19.4002 1.4541 19.5013 1.58697 19.577L3.58097 20.721C3.8485 20.8756 4.16635 20.918 4.46504 20.8389C4.76374 20.7598 5.01898 20.5657 5.17497 20.299L11.289 9.795Z" fill="#3D3E48"/>
</svg>
              <div className=" space-y-5">
                <h1 className="text-zinc-700 text-[27.65px] font-bold font-['Poppins'] leading-[33.18px] ">
                  Climbing
                </h1>
                <p className="w-full text-zinc-700 text-base font-normal font-['Poppins'] leading-7">
                  Phasellus enim libero, blandit vel sapien vitae, condimentum
                  ultricies magna et. Quisque euismod orci ut et lobortis.
                </p>
                <button
                  type="submit"
                  className="text-white text-base font-bold font-['Poppins'] leading-7  px-5 py-[5px] bg-[#43B97F] rounded-lg"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>









          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
            <div className="flex gap-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="158" height="48" viewBox="0 0 48 48" fill="none">
  <path d="M5.21804 12.532C5.58404 12.04 6.06604 11.374 6.45204 10.898C7.60804 9.586 7.75804 9.414 8.81004 8.444C9.12204 8.188 9.49204 7.88 9.85404 7.59C7.18404 9.85 6.84404 12.352 9.29404 13.898C9.29004 13.898 9.29004 13.898 9.29004 13.902C12.716 15.966 20.224 15.52 26.148 12.876C31.886 10.316 34.004 6.654 31.172 4.478C28.686 4.012 25.722 3.958 22.586 4.378L22.26 3.84L22.53 2.948C24.374 2.782 26.126 2.822 27.638 3.08C28.004 3.142 28.486 3.248 28.846 3.324C29.542 3.494 29.92 3.596 30.374 3.742C30.838 3.88 31.234 4.018 31.924 4.274C32.6 4.54 32.892 4.66 33.434 4.93C34.041 5.20693 34.6307 5.52016 35.2 5.868C39.712 8.706 36.906 13.884 28.944 17.432C21.004 20.968 10.886 21.524 6.35204 18.72C6.35004 18.716 6.34404 18.712 6.33204 18.708H6.34004C3.86404 17.14 3.60404 14.864 5.21804 12.532ZM25.876 32.372L25.812 29.184L23.546 26.664C16.06 28.36 8.70204 27.996 4.61004 25.586C4.59604 25.57 4.56204 25.554 4.54804 25.538C2.23204 24.112 1.66004 22.272 1.83404 20.272C1.29204 23.198 1.24804 24.254 1.32604 26.758C1.42204 28.326 2.32804 29.772 4.15004 30.912L4.16404 30.928C8.52604 33.64 17.614 34.228 25.876 32.372ZM35.326 36.022C24.76 40.26 11.536 40.51 5.79204 36.588C6.41235 38.1039 7.2564 39.5183 8.29604 40.784C13.568 44.384 25.706 44.154 35.4 40.264C41.074 37.99 44.654 34.964 45.594 32.128L45.858 31.274C46.484 29.11 46.602 27.308 46.702 25.704C46.588 29.186 42.486 33.146 35.326 36.022ZM12.002 44.184C12.334 44.5 13.378 45.782 18.668 47.198C20.098 47.514 23.698 48.528 30.348 47.054L30.388 46.448L29.862 45.624C23.692 47.084 16.838 46.596 12.002 44.184ZM27.27 18.966L32.888 23.224C32.888 23.224 34.09 24.09 32.956 24.698C31.826 25.3 28.924 26.774 28.924 26.774L26.058 25.704L24.62 26.344L27.156 28.546L27.176 31.972L28.666 31.31L29.654 28.416C29.654 28.416 32.688 27.248 33.892 26.808C35.102 26.378 34.94 27.85 34.94 27.85L34.344 34.872L36.324 33.992L39.584 24.518C39.584 24.518 41.312 23.678 42.528 22.94C43.742 22.202 44.158 20.978 44.158 20.978C44.158 20.978 42.974 20.468 41.61 20.878C40.246 21.284 38.468 22.008 38.468 22.008L29.244 18.09L27.27 18.966ZM15.384 5.494L19.198 8.532L20.24 8.376L18.164 5.65C18.164 5.65 17.712 5.086 18.32 4.952C18.932 4.816 20.48 4.5 20.48 4.5L21.644 5.43L22.428 5.314L21.54 3.902L22.008 2.336L21.25 2.446L20.352 3.638C20.352 3.638 18.776 3.786 18.156 3.838C17.532 3.886 17.8 3.216 17.8 3.216L18.996 0L17.948 0.154L15.188 4.172C15.188 4.172 14.268 4.34 13.602 4.53C12.934 4.718 12.582 5.234 12.582 5.234C12.582 5.234 13.072 5.63 13.762 5.616C14.458 5.602 15.384 5.494 15.384 5.494ZM34.234 44.53L31.766 43.24L31.198 43.438L32.66 44.746C32.66 44.746 32.972 45.012 32.644 45.154C32.316 45.294 31.48 45.638 31.48 45.638L30.79 45.33L30.38 45.478L30.954 46.09L30.898 46.984L31.326 46.836L31.646 46.11C31.646 46.11 32.514 45.852 32.86 45.76C33.204 45.666 33.126 46.07 33.126 46.07L32.8 48L33.37 47.802L34.488 45.25C34.488 45.25 34.982 45.056 35.336 44.878C35.69 44.7 35.83 44.372 35.83 44.372C35.83 44.372 35.516 44.2 35.128 44.286C34.738 44.368 34.234 44.53 34.234 44.53Z" fill="#3D3E48"/>
            </svg>
              <div className=" space-y-5">
                <h1 className="text-zinc-700 text-[27.65px] font-bold font-['Poppins'] leading-[33.18px] ">
                  Hiking
                </h1>
                <p className="w-full text-zinc-700 text-base font-normal font-['Poppins'] leading-7">
                  Phasellus enim libero, blandit vel sapien vitae, condimentum
                  ultricies magna et. Quisque euismod orci ut et lobortis.
                </p>
                <button
                  type="submit"
                  className="text-white text-base font-bold font-['Poppins'] leading-7  px-5 py-[5px] bg-[#43B97F]  rounded-lg"
                >
                  Read More
                </button>
              </div>
            </div>
            <div className="flex gap-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="158" height="48" viewBox="0 0 48 48" fill="none">
  <path d="M41.25 3C41.4489 3 41.6397 3.07902 41.7803 3.21967C41.921 3.36032 42 3.55109 42 3.75V33.0645L41.997 33.1845C41.9715 33.7576 41.9114 34.3287 41.817 34.8945C41.5914 36.279 41.1622 37.6225 40.5435 38.8815C39.801 40.3665 38.6505 41.9205 36.8835 43.0995C35.106 44.2845 32.8335 45 30 45C27.1695 45 24.8955 44.286 23.115 43.0995C21.348 41.9205 20.199 40.3665 19.455 38.8815C18.8366 37.622 18.408 36.2779 18.183 34.893C18.0886 34.3276 18.0285 33.7571 18.003 33.1845C18.0016 33.1445 18.0006 33.1045 18 33.0645V33H16.5255C16.1248 33.0016 15.7397 32.8449 15.454 32.564C15.1683 32.2831 15.0051 31.9006 15 31.5C15 30.6765 15.6885 30 16.5255 30H23.9745C24.8265 30 25.5 30.6765 25.5 31.5C25.5 32.3235 24.8115 33 23.9745 33H22.5V33.0345L22.5135 33.2595C22.5285 33.465 22.5585 33.7755 22.6215 34.1535C22.749 34.92 23.001 35.9085 23.481 36.8685C23.9565 37.821 24.636 38.7045 25.611 39.354C26.5725 39.996 27.9555 40.5 30 40.5C32.0445 40.5 33.4275 39.996 34.389 39.354C35.364 38.7045 36.0435 37.821 36.519 36.8685C36.999 35.9085 37.251 34.92 37.3785 34.1535C37.4401 33.7831 37.4802 33.4095 37.4985 33.0345L37.5 32.991V3.75C37.5 3.55109 37.579 3.36032 37.7197 3.21967C37.8603 3.07902 38.0511 3 38.25 3H41.25Z" fill="#3D3E48"/>
  <path d="M16.5465 23.607C15.5624 24.3489 14.3634 24.7501 13.131 24.75C11.9977 24.7512 10.8754 24.5289 9.82805 24.096C8.78074 23.663 7.82906 23.0279 7.02745 22.2268C6.22583 21.4257 5.58999 20.4745 5.15631 19.4275C4.72263 18.3805 4.49961 17.2583 4.5 16.125C4.49961 14.9917 4.72263 13.8695 5.15631 12.8225C5.58999 11.7755 6.22583 10.8243 7.02745 10.0232C7.82906 9.22214 8.78074 8.58697 9.82805 8.15402C10.8754 7.72106 11.9977 7.49882 13.131 7.5H27.3405C29.6314 7.4992 31.8292 8.40654 33.4524 10.0232C35.0756 11.6399 35.9917 13.8341 36 16.125C36.0004 17.2583 35.7774 18.3805 35.3437 19.4275C34.91 20.4745 34.2742 21.4257 33.4726 22.2268C32.6709 23.0279 31.7193 23.663 30.672 24.096C29.6247 24.5289 28.5023 24.7512 27.369 24.75C26.1285 24.75 24.954 24.345 23.997 23.64C23.905 24.5615 23.4736 25.4159 22.7866 26.0369C22.0995 26.6579 21.2061 27.0012 20.28 27C18.33 27 16.7265 25.509 16.5465 23.607ZM33.5475 16.125C33.5459 14.4796 32.8914 12.902 31.7276 11.7388C30.5638 10.5756 28.9859 9.9218 27.3405 9.921H13.131C11.4853 9.9214 9.90706 10.575 8.74296 11.7383C7.57885 12.9015 6.92409 14.4793 6.9225 16.125C6.92409 17.7707 7.57885 19.3485 8.74296 20.5117C9.90706 21.675 11.4853 22.3286 13.131 22.329C14.4465 22.329 15.6135 21.5505 16.122 20.34L16.7505 18.861C17.0372 18.1736 17.5213 17.5865 18.1414 17.174C18.7616 16.7616 19.4902 16.5421 20.235 16.5435C20.9795 16.5437 21.7073 16.7638 22.3272 17.1761C22.9471 17.5883 23.4315 18.1745 23.7195 18.861L24.3495 20.34C24.595 20.9305 25.0103 21.4348 25.5428 21.7889C26.0753 22.1431 26.701 22.331 27.3405 22.329C28.9859 22.3282 30.5638 21.6744 31.7276 20.5112C32.8914 19.348 33.5459 17.7704 33.5475 16.125Z" fill="#3D3E48"/>
</svg>
              <div className=" space-y-5">
                <h1 className="text-zinc-700 text-[27.65px] font-bold font-['Poppins'] leading-[33.18px] ">
                  Staking
                </h1>
                <p className="w-full text-zinc-700 text-base font-normal font-['Poppins'] leading-7">
                  Phasellus enim libero, blandit vel sapien vitae, condimentum
                  ultricies magna et. Quisque euismod orci ut et lobortis.
                </p>
                <button
                  type="submit"
                  className="text-white text-base font-bold font-['Poppins'] leading-7  px-5 py-[5px] bg-[#43B97F]  rounded-lg"
                >
                  Read More
                </button>
              </div>
            </div>
            <div className="flex gap-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="158" height="64" viewBox="0 0 48 64" fill="none">
              <g clip-path="url(#clip0_19_512)">
                <path d="M24.725 53.4752C26.3375 54.9377 28.9375 57.6377 28.875 59.8127C28.875 59.9127 28.8625 60.0127 28.8625 60.1252C28.6375 62.6002 26.5125 64.0126 23.975 64.0002C20.85 63.9877 18.9875 61.9002 19.1375 59.5252C19.2625 57.5002 21.7 54.9377 23.1875 53.5752C23.475 53.3127 23.525 53.2377 23.8875 53.1252C24.3125 53.1252 24.375 53.1627 24.725 53.4752ZM41.4875 8.41265C39.45 5.20015 36.6625 3.33765 33.575 1.90015C30.3875 0.562654 26.75 -0.0248462 24 0.00015379C18.4875 0.00015379 15.1 1.65015 13.8625 2.16265C7.16245 5.65015 3.31245 10.9002 3.49995 19.8252C4.38745 30.1002 15.625 41.8252 22.975 49.0502C23.1875 49.2502 23.5375 49.6127 23.75 49.6877L24.1625 49.7002C24.425 49.6127 24.3875 49.6377 24.6 49.4377C31.1375 43.2877 42.1875 31.2127 44.0875 22.4752C44.9625 17.5752 44.475 13.4127 41.4875 8.41265ZM23.35 43.9877C19.85 37.6002 15.2 27.6502 14.6875 20.3627C14.2625 14.4252 16.1125 3.96265 23.35 3.27515V43.9877ZM41.0875 22.5002C39.0375 29.6002 31.425 38.5002 26.225 43.7877C29.7 37.3002 34.375 27.1252 34.625 19.8002C34.825 14.0627 33.4 6.57515 28.625 3.37515C39.725 5.66265 43.0625 15.6377 41.0875 22.5002Z" fill="#3D3E48"/>
              </g>
              <defs>
                <clipPath id="clip0_19_512">
                  <rect width="48" height="64" fill="white"/>
                </clipPath>
              </defs>
            </svg>
              <div className=" space-y-5">
                <h1 className="text-zinc-700 text-[27.65px] font-bold font-['Poppins'] leading-[33.18px] ">
                  Climbing
                </h1>
                <p className="w-full text-zinc-700 text-base font-normal font-['Poppins'] leading-7">
                  Phasellus enim libero, blandit vel sapien vitae, condimentum
                  ultricies magna et. Quisque euismod orci ut et lobortis.
                </p>
                <button
                  type="submit"
                  className="text-white text-base font-bold font-['Poppins'] leading-7  px-5 py-[5px] bg-[#43B97F] rounded-lg"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveSection;
