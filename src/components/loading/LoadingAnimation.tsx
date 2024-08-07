import React from 'react';

interface Props {
    // Define your component props here
}

const LoadingAnimation: React.FC<Props> = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <svg width="504" height="162" viewBox="0 0 504 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.7">
                    <path className="loadingAnimationFade" d="M97.211 125.569C86.041 125.569 75.2209 122.269 65.5009 115.729C48.6609 104.409 38.0909 85.2187 37.9209 65.6587C37.7309 44.4187 46.651 24.7087 61.771 12.9287C72.4109 4.63867 91.1509 -3.66133 119.971 3.86867C144.811 10.3687 206.221 50.9387 217.501 58.4787C228.781 50.9387 290.211 10.3587 315.031 3.86867C343.851 -3.67133 362.581 4.63867 373.231 12.9287C388.351 24.7087 397.271 44.4287 397.081 65.6587C396.911 85.2287 386.341 104.409 369.491 115.729C353.221 126.659 333.861 128.549 314.971 121.049C300.081 115.129 288.141 107.829 277.591 101.379C273.581 98.9287 269.801 96.6187 266.031 94.4787C239.701 79.5187 222.701 67.8787 217.481 64.2087C212.271 67.8787 195.281 79.5087 168.931 94.4787C165.171 96.6187 161.381 98.9287 157.371 101.379C146.831 107.829 134.881 115.129 119.991 121.049C112.411 124.069 104.731 125.569 97.211 125.569ZM98.381 4.92867C85.311 4.92867 73.7309 8.67867 64.2309 16.0787C50.0809 27.0987 41.7409 45.6187 41.9209 65.6187C42.0809 83.8787 51.971 101.809 67.741 112.409C82.881 122.589 100.921 124.329 118.551 117.329C133.121 111.539 144.911 104.329 155.321 97.9587C159.361 95.4887 163.171 93.1587 166.991 90.9887C192.281 76.6287 208.861 65.3787 214.621 61.3387C201.861 52.8287 142.741 13.9387 118.971 7.71868C111.781 5.85868 104.891 4.92867 98.381 4.92867ZM220.391 61.3487C226.161 65.3787 242.751 76.6387 268.021 90.9987C271.841 93.1687 275.651 95.4987 279.691 97.9687C290.101 104.329 301.891 111.539 316.461 117.339C334.081 124.349 352.131 122.599 367.271 112.419C383.031 101.829 392.931 83.8987 393.091 65.6287C393.271 45.6287 384.931 27.1087 370.781 16.0887C356.541 4.98868 337.621 2.10867 316.051 7.73867C292.281 13.9487 233.151 52.8387 220.391 61.3487Z" fill="url(#paint0_linear_1234_4)" />
                    <path className="loadingAnimationFade" d="M166.221 125.569C155.051 125.569 144.231 122.269 134.511 115.729C117.671 104.409 107.101 85.2187 106.931 65.6587C106.741 44.4187 115.661 24.7087 130.781 12.9287C141.421 4.63867 160.161 -3.67133 188.981 3.86867C213.821 10.3687 275.231 50.9387 286.511 58.4787C297.791 50.9387 359.221 10.3587 384.041 3.86867C412.861 -3.67133 431.591 4.63867 442.241 12.9287C457.361 24.7087 466.281 44.4287 466.091 65.6587C465.921 85.2287 455.351 104.409 438.501 115.729C422.231 126.659 402.871 128.549 383.981 121.049C369.091 115.129 357.151 107.829 346.601 101.379C342.591 98.9287 338.811 96.6187 335.041 94.4787C308.711 79.5287 291.711 67.8787 286.491 64.2087C281.281 67.8787 264.291 79.5087 237.941 94.4787C234.181 96.6187 230.391 98.9287 226.381 101.379C215.841 107.829 203.891 115.129 189.001 121.049C181.431 124.069 173.741 125.569 166.221 125.569ZM167.391 4.92867C154.321 4.92867 142.741 8.67867 133.241 16.0787C119.091 27.0987 110.751 45.6187 110.931 65.6187C111.091 83.8787 120.981 101.809 136.751 112.409C151.891 122.589 169.931 124.329 187.561 117.329C202.131 111.539 213.921 104.329 224.331 97.9587C228.371 95.4887 232.181 93.1587 236.001 90.9887C261.291 76.6287 277.871 65.3787 283.631 61.3387C270.871 52.8287 211.751 13.9387 187.981 7.71868C180.791 5.85868 173.901 4.92867 167.391 4.92867ZM289.401 61.3487C295.171 65.3787 311.761 76.6387 337.031 90.9987C340.851 93.1687 344.661 95.4987 348.701 97.9687C359.111 104.329 370.901 111.539 385.471 117.339C403.091 124.349 421.141 122.599 436.281 112.419C452.041 101.829 461.941 83.8987 462.101 65.6287C462.281 45.6287 453.941 27.1087 439.791 16.0887C425.551 4.98868 406.631 2.10867 385.061 7.73867C361.291 13.9487 302.161 52.8387 289.401 61.3487Z" fill="url(#paint1_linear_1234_4)" />
                </g>
                <path className='loadingAnimation' d="M13.07 72.4873C13.39 77.9973 17.17 80.7473 24.41 80.7473C26.32 80.7473 27.99 80.3573 29.44 79.5773C31.15 78.5973 32.01 77.2374 32.01 75.5074C32.01 73.4974 29.34 71.7273 24.01 70.1873C16.52 68.0073 11.58 66.1873 9.18 64.7173C3.84 61.4873 1.18 56.8174 1.18 50.6974C1.18 45.6074 3.32 41.6673 7.6 38.8773C11.27 36.4773 15.8 35.2773 21.18 35.2773C27 35.2773 32 36.6573 36.16 39.4273C40.96 42.6073 43.35 46.9673 43.35 52.4973V52.8673H30.06C29.89 50.5073 28.86 48.7173 26.98 47.4973C25.36 46.4473 23.31 45.9273 20.81 45.9273C16.23 45.9273 13.95 47.5274 13.95 50.7274C13.95 52.8274 16.62 54.6674 21.95 56.2274C29.76 58.4974 34.71 60.2273 36.82 61.3973C42.13 64.3773 44.78 68.6873 44.78 74.3073C44.78 80.1473 42.28 84.5673 37.29 87.5473C33.2 89.9973 28.03 91.2173 21.76 91.2173C15.76 91.2173 10.76 89.7373 6.75 86.7773C2.25 83.4773 0 78.9073 0 73.0873V72.4973H13.07V72.4873Z" fill="url(#paint2_linear_1234_4)" />
                <path className='loadingAnimation' d="M94.7695 36.6992H108.39V56.3392H126.05V36.6992H139.74V89.7792H126.05V67.6092H108.39V89.7792H94.7695V36.6992Z" fill="url(#paint3_linear_1234_4)" />
                <path className='loadingAnimation' d="M189.77 36.6992H230.51V47.7492H203.16V56.6292H228.12V67.5292H203.16V78.5792H231.64V89.7692H189.76V36.6992H189.77Z" fill="url(#paint4_linear_1234_4)" />
                <path className='loadingAnimation' d="M278.41 36.6992H319.15V47.7492H291.8V56.6292H316.76V67.5292H291.8V78.5792H320.28V89.7692H278.4V36.6992H278.41Z" fill="url(#paint5_linear_1234_4)" />
                <path className='loadingAnimation' d="M377.33 72.4873C377.65 77.9973 381.43 80.7473 388.67 80.7473C390.58 80.7473 392.26 80.3573 393.7 79.5773C395.41 78.5973 396.27 77.2374 396.27 75.5074C396.27 73.4974 393.6 71.7273 388.27 70.1873C380.78 68.0073 375.84 66.1873 373.44 64.7173C368.1 61.4873 365.44 56.8174 365.44 50.6974C365.44 45.6074 367.58 41.6673 371.86 38.8773C375.53 36.4773 380.06 35.2773 385.44 35.2773C391.26 35.2773 396.26 36.6573 400.42 39.4273C405.22 42.6073 407.61 46.9673 407.61 52.4973V52.8673H394.32C394.15 50.5073 393.12 48.7173 391.24 47.4973C389.62 46.4473 387.57 45.9273 385.07 45.9273C380.49 45.9273 378.21 47.5274 378.21 50.7274C378.21 52.8274 380.88 54.6674 386.21 56.2274C394.02 58.4974 398.97 60.2273 401.08 61.3973C406.39 64.3773 409.04 68.6873 409.04 74.3073C409.04 80.1473 406.54 84.5673 401.55 87.5473C397.46 89.9973 392.29 91.2173 386.02 91.2173C380.03 91.2173 375.02 89.7373 371.01 86.7773C366.51 83.4773 364.26 78.9073 364.26 73.0873V72.4973H377.33V72.4873Z" fill="url(#paint6_linear_1234_4)" />
                <path className='loadingAnimation' d="M459.029 36.6992H472.649V56.3392H490.309V36.6992H503.999V89.7792H490.309V67.6092H472.649V89.7792H459.029V36.6992Z" fill="url(#paint7_linear_1234_4)" />
                <path className='loadingAnimationFade' d="M71.7305 139.141H75.4905V157.291H86.8305V160.711H71.7305V139.141Z" fill="url(#paint8_linear_1234_4)" />
                <path className='loadingAnimationFade' d="M112.931 151.369C112.931 152.969 112.711 154.379 112.271 155.589C111.831 156.799 111.211 157.809 110.411 158.619C109.611 159.429 108.641 160.039 107.501 160.439C106.361 160.839 105.081 161.039 103.661 161.039C102.261 161.039 101.001 160.839 99.8707 160.439C98.7407 160.039 97.7707 159.439 96.9707 158.639C96.1707 157.839 95.5507 156.849 95.1207 155.669C94.6907 154.489 94.4707 153.119 94.4707 151.559V139.139H98.2307V151.399C98.2307 153.409 98.7207 154.939 99.6907 155.989C100.661 157.039 102.001 157.559 103.721 157.559C105.411 157.559 106.751 157.059 107.721 156.049C108.691 155.039 109.181 153.539 109.181 151.549V139.129H112.941V151.369H112.931Z" fill="url(#paint9_linear_1234_4)" />
                <path className='loadingAnimationFade' d="M136.53 160.699L130.86 152.539L125.16 160.699H120.82L128.68 149.729L121.13 139.129H125.6L130.96 146.859L136.35 139.129H140.69L133.17 149.669L141 160.699H136.53Z" fill="url(#paint10_linear_1234_4)" />
                <path className='loadingAnimationFade' d="M167.341 151.369C167.341 152.969 167.121 154.379 166.681 155.589C166.241 156.799 165.621 157.809 164.821 158.619C164.021 159.429 163.051 160.039 161.911 160.439C160.771 160.839 159.491 161.039 158.071 161.039C156.671 161.039 155.411 160.839 154.281 160.439C153.151 160.039 152.181 159.439 151.381 158.639C150.581 157.839 149.961 156.849 149.531 155.669C149.101 154.489 148.881 153.119 148.881 151.559V139.139H152.641V151.399C152.641 153.409 153.131 154.939 154.101 155.989C155.071 157.039 156.411 157.559 158.131 157.559C159.821 157.559 161.161 157.059 162.131 156.049C163.101 155.039 163.591 153.539 163.591 151.549V139.129H167.351V151.369H167.341Z" fill="url(#paint11_linear_1234_4)" />
                <path className='loadingAnimationFade' d="M191 160.699L185.68 153.179H180.92V160.699H177.16V139.129H186.77C188 139.129 189.12 139.289 190.11 139.609C191.11 139.929 191.95 140.379 192.64 140.969C193.33 141.559 193.86 142.269 194.23 143.129C194.6 143.979 194.78 144.929 194.78 145.979C194.78 146.889 194.65 147.689 194.39 148.399C194.13 149.109 193.78 149.739 193.33 150.279C192.88 150.819 192.34 151.289 191.71 151.669C191.08 152.049 190.39 152.339 189.63 152.549L195.45 160.709H191V160.699ZM189.76 143.469C188.98 142.859 187.88 142.559 186.45 142.559H180.92V149.829H186.48C187.84 149.829 188.92 149.499 189.72 148.839C190.52 148.179 190.92 147.289 190.92 146.179C190.94 144.979 190.54 144.079 189.76 143.469Z" fill="url(#paint12_linear_1234_4)" />
                <path className='loadingAnimationFade' d="M213.46 160.701H209.64V152.201L201.07 139.141H205.54L211.58 148.691L217.68 139.141H222.02L213.45 152.111V160.701H213.46Z" fill="url(#paint13_linear_1234_4)" />
                <path className='loadingAnimationFade' d="M247.59 151.609V160.699H243.83V139.129H247.59V148.099H257.94V139.129H261.7V160.699H257.94V151.609H247.59Z" fill="url(#paint14_linear_1234_4)" />
                <path className='loadingAnimationFade' d="M292.64 154.2C292.09 155.56 291.31 156.74 290.3 157.76C289.29 158.78 288.1 159.58 286.73 160.18C285.35 160.78 283.83 161.07 282.17 161.07C280.51 161.07 278.99 160.78 277.61 160.19C276.23 159.6 275.05 158.81 274.07 157.8C273.08 156.79 272.31 155.61 271.76 154.26C271.21 152.9 270.93 151.47 270.93 149.95C270.93 148.43 271.21 146.99 271.76 145.64C272.31 144.28 273.1 143.1 274.1 142.08C275.1 141.06 276.3 140.26 277.67 139.66C279.05 139.07 280.57 138.77 282.23 138.77C283.89 138.77 285.41 139.06 286.79 139.65C288.17 140.23 289.35 141.03 290.33 142.04C291.32 143.05 292.09 144.23 292.64 145.58C293.19 146.94 293.47 148.37 293.47 149.89C293.47 151.41 293.19 152.85 292.64 154.2ZM288.96 146.98C288.6 146.05 288.1 145.23 287.45 144.53C286.8 143.83 286.03 143.28 285.12 142.87C284.21 142.46 283.23 142.25 282.16 142.25C281.09 142.25 280.11 142.45 279.22 142.85C278.33 143.25 277.56 143.79 276.92 144.48C276.28 145.17 275.79 145.98 275.43 146.91C275.07 147.85 274.89 148.84 274.89 149.88C274.89 150.93 275.07 151.92 275.43 152.85C275.79 153.79 276.29 154.6 276.94 155.3C277.59 156 278.36 156.55 279.27 156.96C280.17 157.37 281.16 157.58 282.23 157.58C283.3 157.58 284.28 157.38 285.17 156.98C286.06 156.58 286.83 156.04 287.47 155.35C288.11 154.66 288.6 153.85 288.96 152.92C289.32 151.99 289.5 150.99 289.5 149.95C289.5 148.9 289.31 147.91 288.96 146.98Z" fill="url(#paint15_linear_1234_4)" />
                <path className='loadingAnimationFade' d="M323.45 154.2C322.9 155.56 322.12 156.74 321.11 157.76C320.1 158.78 318.91 159.58 317.54 160.18C316.16 160.78 314.64 161.07 312.98 161.07C311.32 161.07 309.8 160.78 308.42 160.19C307.04 159.6 305.86 158.81 304.88 157.8C303.89 156.79 303.12 155.61 302.57 154.26C302.02 152.9 301.74 151.47 301.74 149.95C301.74 148.43 302.02 146.99 302.57 145.64C303.12 144.28 303.91 143.1 304.91 142.08C305.91 141.06 307.11 140.26 308.48 139.66C309.86 139.07 311.38 138.77 313.04 138.77C314.7 138.77 316.22 139.06 317.6 139.65C318.98 140.23 320.16 141.03 321.14 142.04C322.13 143.05 322.9 144.23 323.45 145.58C324 146.94 324.28 148.37 324.28 149.89C324.28 151.41 324 152.85 323.45 154.2ZM319.77 146.98C319.41 146.05 318.91 145.23 318.26 144.53C317.61 143.83 316.84 143.28 315.93 142.87C315.03 142.46 314.04 142.25 312.97 142.25C311.9 142.25 310.92 142.45 310.03 142.85C309.14 143.25 308.37 143.79 307.73 144.48C307.09 145.17 306.6 145.98 306.24 146.91C305.88 147.85 305.7 148.84 305.7 149.88C305.7 150.93 305.88 151.92 306.24 152.85C306.6 153.79 307.1 154.6 307.75 155.3C308.4 156 309.17 156.55 310.08 156.96C310.98 157.37 311.97 157.58 313.04 157.58C314.11 157.58 315.09 157.38 315.98 156.98C316.87 156.58 317.64 156.04 318.28 155.35C318.92 154.66 319.41 153.85 319.77 152.92C320.13 151.99 320.31 150.99 320.31 149.95C320.3 148.9 320.12 147.91 319.77 146.98Z" fill="url(#paint16_linear_1234_4)" />
                <path className='loadingAnimationFade' d="M352.56 160.701H347.97L340.61 150.991L337.25 154.441V160.691H333.49V139.121H337.25V149.961L347.51 139.121H352.16L343.19 148.391L352.56 160.701Z" fill="url(#paint17_linear_1234_4)" />
                <path className='loadingAnimationFade' d="M380.66 160.7H376.65L374.46 155.49H364.26L362.04 160.7H358.16L367.65 138.98H371.16L380.66 160.7ZM369.35 143.51L365.65 152.14H373.07L369.35 143.51Z" fill="url(#paint18_linear_1234_4)" />
                <path className='loadingAnimationFade' d="M392.74 151.609V160.699H388.98V139.129H392.74V148.099H403.09V139.129H406.85V160.699H403.09V151.609H392.74Z" fill="url(#paint19_linear_1234_4)" />
                <path className='loadingAnimationFade' d="M420.4 145.879C420.54 146.189 420.81 146.479 421.19 146.739C421.57 147.009 422.1 147.249 422.77 147.479C423.44 147.709 424.29 147.939 425.32 148.189C426.45 148.479 427.46 148.799 428.33 149.139C429.2 149.489 429.93 149.919 430.51 150.419C431.09 150.919 431.52 151.509 431.82 152.179C432.12 152.849 432.27 153.629 432.27 154.539C432.27 155.569 432.08 156.479 431.7 157.279C431.32 158.079 430.8 158.759 430.13 159.309C429.46 159.859 428.65 160.289 427.71 160.569C426.77 160.849 425.73 160.999 424.6 160.999C422.94 160.999 421.34 160.719 419.82 160.149C418.3 159.589 416.89 158.719 415.6 157.549L417.88 154.839C418.93 155.739 419.98 156.439 421.05 156.919C422.12 157.399 423.33 157.639 424.68 157.639C425.85 157.639 426.78 157.389 427.47 156.899C428.16 156.409 428.5 155.739 428.5 154.899C428.5 154.509 428.43 154.159 428.3 153.849C428.17 153.539 427.92 153.259 427.56 152.999C427.2 152.739 426.71 152.499 426.08 152.279C425.45 152.049 424.63 151.819 423.62 151.569C422.47 151.299 421.44 150.999 420.55 150.679C419.66 150.359 418.9 149.939 418.29 149.449C417.68 148.959 417.22 148.359 416.9 147.659C416.58 146.959 416.42 146.109 416.42 145.099C416.42 144.159 416.6 143.299 416.97 142.529C417.34 141.759 417.84 141.099 418.48 140.539C419.12 139.979 419.89 139.559 420.8 139.259C421.7 138.959 422.69 138.809 423.75 138.809C425.33 138.809 426.75 139.039 428.02 139.499C429.28 139.959 430.47 140.629 431.58 141.519L429.55 144.389C428.56 143.669 427.59 143.119 426.62 142.739C425.65 142.359 424.68 142.169 423.69 142.169C422.58 142.169 421.72 142.419 421.1 142.919C420.48 143.419 420.18 144.029 420.18 144.749C420.19 145.209 420.26 145.579 420.4 145.879Z" fill="url(#paint20_linear_1234_4)" />
                <defs>
                    <linearGradient id="paint0_linear_1234_4" x1="37.9088" y1="63.2398" x2="397.08" y2="63.2398" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#E2C15A" />
                        <stop offset="0.25" stopColor="#B57E10" />
                        <stop offset="0.7401" stopColor="#B57E10" />
                        <stop offset="0.75" stopColor="#B57E10" />
                        <stop offset="0.8871" stopColor="#CFA53B" />
                        <stop offset="1" stopColor="#E2C15A" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_1234_4" x1="106.922" y1="63.2397" x2="466.093" y2="63.2397" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#E2C15A" />
                        <stop offset="0.25" stopColor="#B57E10" />
                        <stop offset="0.7401" stopColor="#B57E10" />
                        <stop offset="0.75" stopColor="#B57E10" />
                        <stop offset="0.8871" stopColor="#CFA53B" />
                        <stop offset="1" stopColor="#E2C15A" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_1234_4" x1="56.0507" y1="63.2383" x2="438.098" y2="63.2383" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9DF7B" />
                        <stop offset="0.2038" stopColor="#B57E10" />
                        <stop offset="0.2643" stopColor="#B78114" />
                        <stop offset="0.3227" stopColor="#BF8C1F" />
                        <stop offset="0.3803" stopColor="#CB9E33" />
                        <stop offset="0.4373" stopColor="#DDB64E" />
                        <stop offset="0.4935" stopColor="#F3D671" />
                        <stop offset="0.5077" stopColor="#F9DF7B" />
                        <stop offset="0.5189" stopColor="#F9DF7B" />
                        <stop offset="0.5934" stopColor="#F9DF7B" />
                        <stop offset="0.8428" stopColor="#B57E10" />
                        <stop offset="0.9493" stopColor="#E5C35C" />
                        <stop offset="1" stopColor="#F9DF7B" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_1234_4" x1="56.0502" y1="63.2399" x2="438.098" y2="63.2399" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9DF7B" />
                        <stop offset="0.2038" stopColor="#B57E10" />
                        <stop offset="0.2643" stopColor="#B78114" />
                        <stop offset="0.3227" stopColor="#BF8C1F" />
                        <stop offset="0.3803" stopColor="#CB9E33" />
                        <stop offset="0.4373" stopColor="#DDB64E" />
                        <stop offset="0.4935" stopColor="#F3D671" />
                        <stop offset="0.5077" stopColor="#F9DF7B" />
                        <stop offset="0.5189" stopColor="#F9DF7B" />
                        <stop offset="0.5934" stopColor="#F9DF7B" />
                        <stop offset="0.8428" stopColor="#B57E10" />
                        <stop offset="0.9493" stopColor="#E5C35C" />
                        <stop offset="1" stopColor="#F9DF7B" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_1234_4" x1="56.0504" y1="63.2399" x2="438.098" y2="63.2399" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9DF7B" />
                        <stop offset="0.2038" stopColor="#B57E10" />
                        <stop offset="0.2643" stopColor="#B78114" />
                        <stop offset="0.3227" stopColor="#BF8C1F" />
                        <stop offset="0.3803" stopColor="#CB9E33" />
                        <stop offset="0.4373" stopColor="#DDB64E" />
                        <stop offset="0.4935" stopColor="#F3D671" />
                        <stop offset="0.5077" stopColor="#F9DF7B" />
                        <stop offset="0.5189" stopColor="#F9DF7B" />
                        <stop offset="0.5934" stopColor="#F9DF7B" />
                        <stop offset="0.8428" stopColor="#B57E10" />
                        <stop offset="0.9493" stopColor="#E5C35C" />
                        <stop offset="1" stopColor="#F9DF7B" />
                    </linearGradient>
                    <linearGradient id="paint5_linear_1234_4" x1="56.0511" y1="63.2399" x2="438.099" y2="63.2399" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9DF7B" />
                        <stop offset="0.2038" stopColor="#B57E10" />
                        <stop offset="0.2643" stopColor="#B78114" />
                        <stop offset="0.3227" stopColor="#BF8C1F" />
                        <stop offset="0.3803" stopColor="#CB9E33" />
                        <stop offset="0.4373" stopColor="#DDB64E" />
                        <stop offset="0.4935" stopColor="#F3D671" />
                        <stop offset="0.5077" stopColor="#F9DF7B" />
                        <stop offset="0.5189" stopColor="#F9DF7B" />
                        <stop offset="0.5934" stopColor="#F9DF7B" />
                        <stop offset="0.8428" stopColor="#B57E10" />
                        <stop offset="0.9493" stopColor="#E5C35C" />
                        <stop offset="1" stopColor="#F9DF7B" />
                    </linearGradient>
                    <linearGradient id="paint6_linear_1234_4" x1="56.0507" y1="63.2383" x2="438.098" y2="63.2383" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9DF7B" />
                        <stop offset="0.2038" stopColor="#B57E10" />
                        <stop offset="0.2643" stopColor="#B78114" />
                        <stop offset="0.3227" stopColor="#BF8C1F" />
                        <stop offset="0.3803" stopColor="#CB9E33" />
                        <stop offset="0.4373" stopColor="#DDB64E" />
                        <stop offset="0.4935" stopColor="#F3D671" />
                        <stop offset="0.5077" stopColor="#F9DF7B" />
                        <stop offset="0.5189" stopColor="#F9DF7B" />
                        <stop offset="0.5934" stopColor="#F9DF7B" />
                        <stop offset="0.8428" stopColor="#B57E10" />
                        <stop offset="0.9493" stopColor="#E5C35C" />
                        <stop offset="1" stopColor="#F9DF7B" />
                    </linearGradient>
                    <linearGradient id="paint7_linear_1234_4" x1="56.0503" y1="63.2399" x2="438.098" y2="63.2399" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9DF7B" />
                        <stop offset="0.2038" stopColor="#B57E10" />
                        <stop offset="0.2643" stopColor="#B78114" />
                        <stop offset="0.3227" stopColor="#BF8C1F" />
                        <stop offset="0.3803" stopColor="#CB9E33" />
                        <stop offset="0.4373" stopColor="#DDB64E" />
                        <stop offset="0.4935" stopColor="#F3D671" />
                        <stop offset="0.5077" stopColor="#F9DF7B" />
                        <stop offset="0.5189" stopColor="#F9DF7B" />
                        <stop offset="0.5934" stopColor="#F9DF7B" />
                        <stop offset="0.8428" stopColor="#B57E10" />
                        <stop offset="0.9493" stopColor="#E5C35C" />
                        <stop offset="1" stopColor="#F9DF7B" />
                    </linearGradient>
                    <linearGradient id="paint8_linear_1234_4" x1="67.2539" y1="150.38" x2="432.862" y2="136.413" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9DF7B" />
                        <stop offset="0.2038" stopColor="#B57E10" />
                        <stop offset="0.2643" stopColor="#B78114" />
                        <stop offset="0.3227" stopColor="#BF8C1F" />
                        <stop offset="0.3803" stopColor="#CB9E33" />
                        <stop offset="0.4373" stopColor="#DDB64E" />
                        <stop offset="0.4935" stopColor="#F3D671" />
                        <stop offset="0.5077" stopColor="#F9DF7B" />
                        <stop offset="0.5189" stopColor="#F9DF7B" />
                        <stop offset="0.5934" stopColor="#F9DF7B" />
                        <stop offset="0.8428" stopColor="#B57E10" />
                        <stop offset="0.9493" stopColor="#E5C35C" />
                        <stop offset="1" stopColor="#F9DF7B" />
                    </linearGradient>
                    <linearGradient id="paint9_linear_1234_4" x1="67.2896" y1="151.308" x2="432.897" y2="137.34" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9DF7B" />
                        <stop offset="0.2038" stopColor="#B57E10" />
                        <stop offset="0.2643" stopColor="#B78114" />
                        <stop offset="0.3227" stopColor="#BF8C1F" />
                        <stop offset="0.3803" stopColor="#CB9E33" />
                        <stop offset="0.4373" stopColor="#DDB64E" />
                        <stop offset="0.4935" stopColor="#F3D671" />
                        <stop offset="0.5077" stopColor="#F9DF7B" />
                        <stop offset="0.5189" stopColor="#F9DF7B" />
                        <stop offset="0.5934" stopColor="#F9DF7B" />
                        <stop offset="0.8428" stopColor="#B57E10" />
                        <stop offset="0.9493" stopColor="#E5C35C" />
                        <stop offset="1" stopColor="#F9DF7B" />
                    </linearGradient>
                    <linearGradient id="paint10_linear_1234_4" x1="67.3292" y1="152.353" x2="432.937" y2="138.386" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9DF7B" />
                        <stop offset="0.2038" stopColor="#B57E10" />
                        <stop offset="0.2643" stopColor="#B78114" />
                        <stop offset="0.3227" stopColor="#BF8C1F" />
                        <stop offset="0.3803" stopColor="#CB9E33" />
                        <stop offset="0.4373" stopColor="#DDB64E" />
                        <stop offset="0.4935" stopColor="#F3D671" />
                        <stop offset="0.5077" stopColor="#F9DF7B" />
                        <stop offset="0.5189" stopColor="#F9DF7B" />
                        <stop offset="0.5934" stopColor="#F9DF7B" />
                        <stop offset="0.8428" stopColor="#B57E10" />
                        <stop offset="0.9493" stopColor="#E5C35C" />
                        <stop offset="1" stopColor="#F9DF7B" />
                    </linearGradient>
                    <linearGradient id="paint11_linear_1234_4" x1="67.3691" y1="153.383" x2="432.977" y2="139.416" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9DF7B" />
                        <stop offset="0.2038" stopColor="#B57E10" />
                        <stop offset="0.2643" stopColor="#B78114" />
                        <stop offset="0.3227" stopColor="#BF8C1F" />
                        <stop offset="0.3803" stopColor="#CB9E33" />
                        <stop offset="0.4373" stopColor="#DDB64E" />
                        <stop offset="0.4935" stopColor="#F3D671" />
                        <stop offset="0.5077" stopColor="#F9DF7B" />
                        <stop offset="0.5189" stopColor="#F9DF7B" />
                        <stop offset="0.5934" stopColor="#F9DF7B" />
                        <stop offset="0.8428" stopColor="#B57E10" />
                        <stop offset="0.9493" stopColor="#E5C35C" />
                        <stop offset="1" stopColor="#F9DF7B" />
                    </linearGradient>
                    <linearGradient id="paint12_linear_1234_4" x1="67.4095" y1="154.461" x2="433.017" y2="140.494" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9DF7B" />
                        <stop offset="0.2038" stopColor="#B57E10" />
                        <stop offset="0.2643" stopColor="#B78114" />
                        <stop offset="0.3227" stopColor="#BF8C1F" />
                        <stop offset="0.3803" stopColor="#CB9E33" />
                        <stop offset="0.4373" stopColor="#DDB64E" />
                        <stop offset="0.4935" stopColor="#F3D671" />
                        <stop offset="0.5077" stopColor="#F9DF7B" />
                        <stop offset="0.5189" stopColor="#F9DF7B" />
                        <stop offset="0.5934" stopColor="#F9DF7B" />
                        <stop offset="0.8428" stopColor="#B57E10" />
                        <stop offset="0.9493" stopColor="#E5C35C" />
                        <stop offset="1" stopColor="#F9DF7B" />
                    </linearGradient>
                    <linearGradient id="paint13_linear_1234_4" x1="67.4403" y1="155.262" x2="433.048" y2="141.295" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9DF7B" />
                        <stop offset="0.2038" stopColor="#B57E10" />
                        <stop offset="0.2643" stopColor="#B78114" />
                        <stop offset="0.3227" stopColor="#BF8C1F" />
                        <stop offset="0.3803" stopColor="#CB9E33" />
                        <stop offset="0.4373" stopColor="#DDB64E" />
                        <stop offset="0.4935" stopColor="#F3D671" />
                        <stop offset="0.5077" stopColor="#F9DF7B" />
                        <stop offset="0.5189" stopColor="#F9DF7B" />
                        <stop offset="0.5934" stopColor="#F9DF7B" />
                        <stop offset="0.8428" stopColor="#B57E10" />
                        <stop offset="0.9493" stopColor="#E5C35C" />
                        <stop offset="1" stopColor="#F9DF7B" />
                    </linearGradient>
                    <linearGradient id="paint14_linear_1234_4" x1="67.5061" y1="156.996" x2="433.114" y2="143.029" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9DF7B" />
                        <stop offset="0.2038" stopColor="#B57E10" />
                        <stop offset="0.2643" stopColor="#B78114" />
                        <stop offset="0.3227" stopColor="#BF8C1F" />
                        <stop offset="0.3803" stopColor="#CB9E33" />
                        <stop offset="0.4373" stopColor="#DDB64E" />
                        <stop offset="0.4935" stopColor="#F3D671" />
                        <stop offset="0.5077" stopColor="#F9DF7B" />
                        <stop offset="0.5189" stopColor="#F9DF7B" />
                        <stop offset="0.5934" stopColor="#F9DF7B" />
                        <stop offset="0.8428" stopColor="#B57E10" />
                        <stop offset="0.9493" stopColor="#E5C35C" />
                        <stop offset="1" stopColor="#F9DF7B" />
                    </linearGradient>
                    <linearGradient id="paint15_linear_1234_4" x1="67.5487" y1="158.119" x2="433.157" y2="144.152" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9DF7B" />
                        <stop offset="0.2038" stopColor="#B57E10" />
                        <stop offset="0.2643" stopColor="#B78114" />
                        <stop offset="0.3227" stopColor="#BF8C1F" />
                        <stop offset="0.3803" stopColor="#CB9E33" />
                        <stop offset="0.4373" stopColor="#DDB64E" />
                        <stop offset="0.4935" stopColor="#F3D671" />
                        <stop offset="0.5077" stopColor="#F9DF7B" />
                        <stop offset="0.5189" stopColor="#F9DF7B" />
                        <stop offset="0.5934" stopColor="#F9DF7B" />
                        <stop offset="0.8428" stopColor="#B57E10" />
                        <stop offset="0.9493" stopColor="#E5C35C" />
                        <stop offset="1" stopColor="#F9DF7B" />
                    </linearGradient>
                    <linearGradient id="paint16_linear_1234_4" x1="67.5941" y1="159.294" x2="433.202" y2="145.327" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9DF7B" />
                        <stop offset="0.2038" stopColor="#B57E10" />
                        <stop offset="0.2643" stopColor="#B78114" />
                        <stop offset="0.3227" stopColor="#BF8C1F" />
                        <stop offset="0.3803" stopColor="#CB9E33" />
                        <stop offset="0.4373" stopColor="#DDB64E" />
                        <stop offset="0.4935" stopColor="#F3D671" />
                        <stop offset="0.5077" stopColor="#F9DF7B" />
                        <stop offset="0.5189" stopColor="#F9DF7B" />
                        <stop offset="0.5934" stopColor="#F9DF7B" />
                        <stop offset="0.8428" stopColor="#B57E10" />
                        <stop offset="0.9493" stopColor="#E5C35C" />
                        <stop offset="1" stopColor="#F9DF7B" />
                    </linearGradient>
                    <linearGradient id="paint17_linear_1234_4" x1="67.6379" y1="160.441" x2="433.246" y2="146.474" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9DF7B" />
                        <stop offset="0.2038" stopColor="#B57E10" />
                        <stop offset="0.2643" stopColor="#B78114" />
                        <stop offset="0.3227" stopColor="#BF8C1F" />
                        <stop offset="0.3803" stopColor="#CB9E33" />
                        <stop offset="0.4373" stopColor="#DDB64E" />
                        <stop offset="0.4935" stopColor="#F3D671" />
                        <stop offset="0.5077" stopColor="#F9DF7B" />
                        <stop offset="0.5189" stopColor="#F9DF7B" />
                        <stop offset="0.5934" stopColor="#F9DF7B" />
                        <stop offset="0.8428" stopColor="#B57E10" />
                        <stop offset="0.9493" stopColor="#E5C35C" />
                        <stop offset="1" stopColor="#F9DF7B" />
                    </linearGradient>
                    <linearGradient id="paint18_linear_1234_4" x1="67.6804" y1="161.551" x2="433.288" y2="147.584" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9DF7B" />
                        <stop offset="0.2038" stopColor="#B57E10" />
                        <stop offset="0.2643" stopColor="#B78114" />
                        <stop offset="0.3227" stopColor="#BF8C1F" />
                        <stop offset="0.3803" stopColor="#CB9E33" />
                        <stop offset="0.4373" stopColor="#DDB64E" />
                        <stop offset="0.4935" stopColor="#F3D671" />
                        <stop offset="0.5077" stopColor="#F9DF7B" />
                        <stop offset="0.5189" stopColor="#F9DF7B" />
                        <stop offset="0.5934" stopColor="#F9DF7B" />
                        <stop offset="0.8428" stopColor="#B57E10" />
                        <stop offset="0.9493" stopColor="#E5C35C" />
                        <stop offset="1" stopColor="#F9DF7B" />
                    </linearGradient>
                    <linearGradient id="paint19_linear_1234_4" x1="67.7189" y1="162.533" x2="433.326" y2="148.566" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9DF7B" />
                        <stop offset="0.2038" stopColor="#B57E10" />
                        <stop offset="0.2643" stopColor="#B78114" />
                        <stop offset="0.3227" stopColor="#BF8C1F" />
                        <stop offset="0.3803" stopColor="#CB9E33" />
                        <stop offset="0.4373" stopColor="#DDB64E" />
                        <stop offset="0.4935" stopColor="#F3D671" />
                        <stop offset="0.5077" stopColor="#F9DF7B" />
                        <stop offset="0.5189" stopColor="#F9DF7B" />
                        <stop offset="0.5934" stopColor="#F9DF7B" />
                        <stop offset="0.8428" stopColor="#B57E10" />
                        <stop offset="0.9493" stopColor="#E5C35C" />
                        <stop offset="1" stopColor="#F9DF7B" />
                    </linearGradient>
                    <linearGradient id="paint20_linear_1234_4" x1="67.7548" y1="163.535" x2="433.363" y2="149.568" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9DF7B" />
                        <stop offset="0.2038" stopColor="#B57E10" />
                        <stop offset="0.2643" stopColor="#B78114" />
                        <stop offset="0.3227" stopColor="#BF8C1F" />
                        <stop offset="0.3803" stopColor="#CB9E33" />
                        <stop offset="0.4373" stopColor="#DDB64E" />
                        <stop offset="0.4935" stopColor="#F3D671" />
                        <stop offset="0.5077" stopColor="#F9DF7B" />
                        <stop offset="0.5189" stopColor="#F9DF7B" />
                        <stop offset="0.5934" stopColor="#F9DF7B" />
                        <stop offset="0.8428" stopColor="#B57E10" />
                        <stop offset="0.9493" stopColor="#E5C35C" />
                        <stop offset="1" stopColor="#F9DF7B" />
                    </linearGradient>
                </defs>
            </svg>

        </div>
    );
};

export default LoadingAnimation;