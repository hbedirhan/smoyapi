const openBTN = document.querySelector('#openBTN');
const closeBTN = document.querySelector('#closeBTN');
const mobileMENU = document.querySelector('#mobileMENU');

const openMobile = () => {
    openBTN.classList.add('hidden');
    closeBTN.classList.remove('hidden');
    mobileMENU.classList.remove('hidden');
}
const closeMobile = () => {
    closeBTN.classList.add('hidden');
    openBTN.classList.remove('hidden');
    mobileMENU.classList.add('hidden');
}

openBTN.addEventListener('click', openMobile);
closeBTN.addEventListener('click', closeMobile);


const infiniteSlide = document.querySelectorAll('.infiniteSlide');

const overflowSlide = () => {
    for (let i = 0; i < infiniteSlide.length; i++) {
        const element = infiniteSlide[i];
        element.style.transition = 'transform 10s linear';
        element.style.transform = `translateX(-100%)`;
    }
};

const restartSlide = () => {
    setTimeout(() => {
        for (let i = 0; i < infiniteSlide.length; i++) {
            const element = infiniteSlide[i];
            element.style.transition = 'none';
            element.style.transform = 'translateX(0)';
        }
    }, 15000);
};
const controlScreen = () => {
    if (screen.width >= 800) {
        overflowSlide();
        restartSlide();
    }
}
setInterval(() => {
    controlScreen();
}, 16000);


const communicationSlide = document.querySelectorAll('.communicationSlide');

const coverflowSlide = () => {
    for (let i = 0; i < communicationSlide.length; i++) {
        const element = communicationSlide[i];
        element.style.transition = 'transform 10s linear';
        element.style.transform = `translateX(-400%)`;
    }
};

const crestartSlide = () => {
    setTimeout(() => {
        for (let i = 0; i < communicationSlide.length; i++) {
            const element = communicationSlide[i];
            element.style.transition = 'none';
            element.style.transform = 'translateX(0)';
        }
    }, 15000);
};

setInterval(() => {
    if (screen.width < 800) {
        setInterval(() => {
            coverflowSlide();
            crestartSlide();
        }, 16000);
    }
}, 17000);

// slide

let slide = 1;
let slideCount = 2;

const prevSlide = () => {
    slide--;
    showSlide(slide);
}

const nextSlide = () => {
    slide++;
    showSlide(slide);
}

function showSlide(i) {

    slide = i;

    if (i < 1 ) {
        slide = slideCount;
    }
    if (i > slideCount) {
        slide = 1
    }

    document.querySelector('#slideImg').src = `./assets/slide${slide}.png`
}

function autoSlide() {

    let prev;
    interval = setInterval(() => {
        
        if (true) {
            
            do {
                index = Math.floor(Math.random() * slideCount)
            } while (index == prev) {
                prev = index
            }
        } else {
            if (slideCount == index + 1) {
                index = -1
            }
            showSlide(index)
            index++
        }
        showSlide(index)

    }, 6000)
}

document.querySelector('#mainSlider').addEventListener('mouseleave', () => {
    autoSlide();
});

document.querySelector('#mainSlider').addEventListener('mouseenter', () => {
    clearInterval(interval);
});


// form
const form = document.querySelector('#form');

const showForm1 = () => {
    form.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    lang = document.documentElement.lang;
    form.innerHTML = 
    `       <div class="absolute inset-0 bg-[#1B1B1B]"></div>
    <div class="z-10 p-4 rounded text-[#fff]">
    <div class="absolute top-4 left-4">
        <button onclick="closeForm()" class="flex gap-1.5 text-xl"><span class="stroke-[#fff] fill-[#fff]"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
        <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
    </svg></span>${language.form[lang].homepage}</button>
    </div>
    <div class="container mx-auto max-w-screen-xl">
    <div class="container mx-auto">
        <!-- top -->
        <div class="grid lg:grid-cols-4 gap-4">
            
            <!-- buttons -->
            <div class="md:col-span-3 grid grid-cols-3 p-4" id="buttons">
                <div class="flex justify-center">
                    <button onclick="showForm2()" data="Deprem Analiz Rapor"
                        class="button cursor-pointer relative flex overflow-hidden items-start justify-center gap-x-1.5 after:transition-all text-center after:duration-500 transition-all hover:after:w-full after:h-full after:top-0 after:left-0 after:w-0 after:absolute after:bg-[#1B1B1B] bg-[#3B3B3B] text-[#fff] hover:text-[#fff] hover:stroke-[#fff] border border-[#fff] px-6 py-3">
                        <span class="relative z-[2] content-center">
                            ${language.form[lang].earthquake}
                        </span>
                    </button>
                </div>
                <div class="flex justify-center">
                <button onclick="showForm1()" data="Bina Durum Tespit"
                    class="button cursor-pointer relative flex overflow-hidden items-start justify-center gap-x-1.5 after:transition-all text-center after:duration-500 transition-all hover:after:w-full after:h-full after:top-0 after:left-0 after:w-0 after:absolute after:bg-[#1B1B1B] bg-[#9B9B9B] text-[#fff] hover:text-[#fff] hover:stroke-[#fff] border border-[#fff] px-6 py-3">
                    <span class="relative z-[2] content-center">
                        ${language.form[lang].building}
                    </span>
                </button>
            </div>
                <div class="flex justify-center">
                    <button onclick="showForm3()" data="Güçlendirme Projesi"
                        class="button cursor-pointer relative flex overflow-hidden items-start justify-center gap-x-1.5 after:transition-all text-center after:duration-500 transition-all hover:after:w-full after:h-full after:top-0 after:left-0 after:w-0 after:absolute after:bg-[#1B1B1B] bg-[#3B3B3B] text-[#fff] hover:text-[#fff] hover:stroke-[#fff] border border-[#fff] px-6 py-3">
                        <span class="relative z-[2] content-center">
                            ${language.form[lang].strength}
                        </span>
                    </button>
                </div>
            </div>

            <!-- svg -->
            <div class="col-span-1 hidden lg:block">
                <div class="absolute ">
                    <svg width="399" height="308" viewBox="0 0 399 308" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path class="triangle" id="triangle1" opacity="0.15"
                            d="M398.633 107.823C398.164 108.131 397.615 108.386 397.227 108.774C392.102 113.859 386.99 118.958 381.904 124.083C367.25 138.831 352.597 153.592 337.943 168.353C322.539 183.863 307.122 199.374 291.719 214.897C277.627 229.083 263.549 243.282 249.457 257.467C233.599 273.433 217.727 289.398 201.882 305.377C201.039 306.234 200.276 307.184 199.553 308C197.479 306.046 195.539 304.226 193.625 302.379C193.13 301.898 192.742 301.309 192.246 300.827C178.342 286.909 164.397 273.005 150.52 259.073C135.197 243.697 119.927 228.28 104.631 212.877C90.017 198.156 75.4032 183.435 60.7895 168.728C45.346 153.177 29.8891 137.64 14.459 122.076C10.2435 117.834 6.10825 113.511 1.90613 109.255C1.47788 108.814 0.889031 108.533 0.380493 108.185C0.380493 92.5673 0.380493 76.9499 0.380493 61.3458C0.848883 61.667 1.39755 61.9079 1.78565 62.3093C3.49862 64.0624 5.13134 65.9092 6.8577 67.649C22.0335 82.9453 37.2093 98.2282 52.3986 113.511C67.735 128.955 83.0714 144.385 98.3945 159.828C113.316 174.843 128.224 189.872 143.146 204.887C161.426 223.275 179.707 241.663 197.974 260.064C198.376 260.479 198.59 261.081 198.884 261.589C199.192 261.603 199.513 261.616 199.821 261.643C200.102 261.121 200.289 260.505 200.691 260.077C203.782 256.825 206.887 253.586 210.045 250.401C224.311 236.015 238.59 221.642 252.87 207.256C268.313 191.705 283.77 176.155 299.213 160.604C314.135 145.589 329.043 130.56 343.965 115.545C361.71 97.6795 379.469 79.8271 397.227 61.9881C397.615 61.5867 398.164 61.3458 398.646 61.0246V107.864L398.633 107.823Z"
                            fill="#3B3B3B" />
                        <path class="triangle" id="triangle2" opacity="0.4"
                            d="M382.587 0.013855C387.833 0.013855 393.066 0.013855 398.312 0.013855C398.419 0.120916 398.526 0.227976 398.633 0.335036V31.7841C398.084 32.1722 397.456 32.4934 397.001 32.9618C386.08 43.9622 375.173 54.9761 364.253 65.99C349.158 81.2059 334.035 96.4085 318.94 111.625C303.978 126.68 289.03 141.749 274.068 156.804C258.959 172.02 243.864 187.236 228.741 202.425C219.387 211.82 209.992 221.188 200.611 230.569C200.21 230.97 199.781 231.332 199.032 232.028C198.564 231.385 198.256 230.796 197.801 230.341C186.038 218.444 174.261 206.561 162.471 194.69C147.817 179.929 133.163 165.182 118.509 150.421C103.213 135.017 87.9164 119.627 72.6202 104.224C57.8592 89.3559 43.0982 74.4745 28.3239 59.6198C19.4914 50.7472 10.6321 41.9147 1.7728 33.0822C1.3847 32.6941 0.836021 32.4398 0.354248 32.132V0.013855C5.60022 0.013855 10.8328 0.013855 16.0788 0.013855C16.2795 0.375185 16.4134 0.790045 16.681 1.08446C18.6081 3.14538 20.5352 5.23306 22.5158 7.24045C38.5214 23.3664 54.5403 39.4791 70.5459 55.5917C84.892 70.0449 99.2381 84.4981 113.598 98.9512C128.961 114.421 144.324 129.919 159.714 145.362C172.427 158.129 185.194 170.856 197.935 183.596C198.376 184.038 198.845 184.453 199.648 185.215C200.103 184.546 200.41 183.957 200.852 183.502C213.217 171.003 225.61 158.517 237.989 146.045C252.79 131.136 267.591 116.228 282.392 101.333C297.795 85.8229 313.199 70.3125 328.615 54.8021C346.294 37.0167 363.972 19.2446 381.624 1.45917C382.012 1.0577 382.253 0.522392 382.574 0.0406195L382.587 0.013855Z"
                            fill="#3B3B3B" />
                        <path class="triangle" id="triangle3" opacity="0.75"
                            d="M44.9716 0.0133829C60.482 0.0133829 75.9924 0.0133829 91.5028 0.0133829C91.824 0.481773 92.0648 1.03046 92.4529 1.43194C104.564 13.6636 116.675 25.8819 128.8 38.1002C144.016 53.4232 159.232 68.7463 174.461 84.0559C182.304 91.9383 190.186 99.7939 198.055 107.649C198.456 108.051 198.885 108.426 199.661 109.135C200.076 108.519 200.343 107.957 200.745 107.542C207.744 100.409 214.743 93.2765 221.782 86.1838C238.042 69.7901 254.315 53.4099 270.615 37.043C282.392 25.2262 294.209 13.4495 305.985 1.63267C306.454 1.16428 306.775 0.548686 307.163 0C322.566 0 337.97 0 353.373 0C353.212 0.321182 353.119 0.709277 352.878 0.963546C351.366 2.6096 349.867 4.28242 348.288 5.87495C332.282 22.001 316.263 38.1136 300.258 54.2262C286.326 68.2645 272.395 82.3028 258.45 96.3411C243.275 111.624 228.085 126.92 212.909 142.19C208.841 146.285 204.746 150.367 200.664 154.448C200.263 154.85 199.835 155.238 199.059 155.987C198.644 155.385 198.376 154.85 197.975 154.435C191.538 147.877 185.114 141.307 178.637 134.776C163.849 119.854 149.034 104.96 134.233 90.0513C118.937 74.648 103.667 59.2313 88.3444 43.8547C74.3061 29.7628 60.2143 15.7111 46.1626 1.63267C45.6942 1.16428 45.373 0.548686 44.9716 0V0.0133829Z"
                            fill="#3B3B3B" />
                        <path class="triangle" id="triangle4"
                            d="M278.283 0.0133829C275.098 3.2252 271.9 6.4504 268.715 9.66222C259.561 18.8828 250.394 28.09 241.241 37.3106C227.791 50.8538 214.355 64.3836 200.919 77.9267C200.357 78.4888 199.781 79.0241 199.5 79.2784C196.329 76.2138 193.157 73.2696 190.106 70.205C181.635 61.7338 173.217 53.2225 164.773 44.7246C150.119 29.977 135.465 15.2294 120.824 0.481772C120.677 0.334564 120.543 0.160591 120.409 0C135.92 0 151.43 0 166.941 0C170.085 3.19844 173.15 6.46378 176.375 9.56854C184.177 17.0762 192.06 24.5035 199.942 32.0111C201.936 30.0305 204.626 27.3674 207.302 24.6909C215.466 16.474 223.616 8.24367 231.766 0.0133829C247.276 0.0133829 262.786 0.0133829 278.297 0.0133829H278.283Z"
                            fill="#3B3B3B" />
                    </svg>
                </div>
            </div>

        </div>

        <!-- buttom -->
        <div class="grid lg:grid-cols-4 gap-4">
             <!-- content -->
             <div class="col-span-3">
                <div class="flex justify-center">
                    <img class="w-32" src="./assets/LOGO-WHITE.png" alt="">
                </div>
                <p class="text-center">${language.form[lang].building_text}</p>
                <div class="p-4">
                    <label for="input1">birinci inputu gir</label>
                    <input type="email" id="input1" name="email" class="text-[#1B1B1B] mt-1 p-2 w-full border rounded-md focus:outline-none" placeholder="Enter a Email Adress">
                    <label for="input2">ikinci inputu gir</label>
                    <input type="email" id="input2" name="email" class="text-[#1B1B1B] mt-1 p-2 w-full border rounded-md focus:outline-none" placeholder="Enter a Email Adress">
                    <label for="input3">üçüncü inputu gir</label>
                    <input type="email" id="input3" name="email" class="text-[#1B1B1B] mt-1 p-2 w-full border rounded-md focus:outline-none" placeholder="Enter a Email Adress">
                </div>
                <div class="p-4 flex justify-end">
                    <button onclick="sendEmail()" class="relative inline-flex items-center overflow-hidden gap-[8px] justify-start inline-block px-5 py-3 overflow-hidden group border border-solid border-[#fff] after:transition-all transition-all hover:after:w-full after:h-full after:top-0 after:left-0 after:w-0 after:absolute after:bg-[#1B1B1B] bg-[#3B3B3B] after:duration-500 text-[#fff] stroke-[#fff]">
                        <span class="text relative z-[2] text-[15px] font-normal xs:text-[13px] transition-colors duration-200 ease-in-out">${language.form[lang].send}</span>
                        <span class="relative z-[2] text-[10px] h-[10px] duration-500 group-hover:translate-x-[5px]">
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L1 11"></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>

            <!-- tittle -->
            <div class="lg:col-span-1 hidden lg:block">
                <div class="flex flex-col items-center justify-center">
                    <div
                        class="max-w-md absolute translate-x-[3rem] translate-y-[20rem] px-10">
                        <h1
                            class="title text-[#fff] text-[60px] font-light tracking-[-1.8px] sm:text-[30px] md:text-[45px] md:text-center px-10">
                            ${language.form[lang].title}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>`
};

const showForm2 = () => {
    form.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    lang = document.documentElement.lang;
    form.innerHTML = 
    `       <div class="absolute inset-0 bg-[#1B1B1B]"></div>
    <div class="z-10 p-4 rounded text-[#fff]">
    <div class="absolute top-4 left-4">
        <button onclick="closeForm()" class="flex gap-1.5 text-xl"><span class="stroke-[#fff] fill-[#fff]"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
        <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
    </svg></span> ${language.form[lang].homepage}</button>
    </div>
    <div class="container mx-auto max-w-screen-xl">
    <div class="container mx-auto">
        <!-- top -->
        <div class="grid lg:grid-cols-4 gap-4">
            
            <!-- buttons -->
            <div class="md:col-span-3 grid grid-cols-3 p-4" id="buttons">
                <div class="flex justify-center">
                    <button onclick="showForm1()" data="Bina Durum Tespit"
                        class="button cursor-pointer relative flex overflow-hidden items-start justify-center gap-x-1.5 after:transition-all text-center after:duration-500 transition-all hover:after:w-full after:h-full after:top-0 after:left-0 after:w-0 after:absolute after:bg-[#1B1B1B] bg-[#3B3B3B] text-[#fff] hover:text-[#fff] hover:stroke-[#fff] border border-[#fff] px-6 py-3">
                        <span class="relative z-[2] content-center">
                        ${language.form[lang].building}
                        </span>
                    </button>
                </div>
                <div class="flex justify-center">
                <button onclick="showForm2()" data="Deprem Analiz Rapor"
                    class="button cursor-pointer relative flex overflow-hidden items-start justify-center gap-x-1.5 after:transition-all text-center after:duration-500 transition-all hover:after:w-full after:h-full after:top-0 after:left-0 after:w-0 after:absolute after:bg-[#1B1B1B] bg-[#9B9B9B] text-[#fff] hover:text-[#fff] hover:stroke-[#fff] border border-[#fff] px-6 py-3">
                    <span class="relative z-[2] content-center">
                        ${language.form[lang].earthquake}
                    </span>
                </button>
            </div>
                <div class="flex justify-center">
                    <button onclick="showForm3()" data="Güçlendirme Projesi"
                        class="button cursor-pointer relative flex overflow-hidden items-start justify-center gap-x-1.5 after:transition-all text-center after:duration-500 transition-all hover:after:w-full after:h-full after:top-0 after:left-0 after:w-0 after:absolute after:bg-[#1B1B1B] bg-[#3B3B3B] text-[#fff] hover:text-[#fff] hover:stroke-[#fff] border border-[#fff] px-6 py-3">
                        <span class="relative z-[2] content-center">
                            ${language.form[lang].strength}
                        </span>
                    </button>
                </div>
            </div>

            <!-- svg -->
            <div class="col-span-1 hidden lg:block">
                <div class="absolute ">
                    <svg width="399" height="308" viewBox="0 0 399 308" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path class="triangle" id="triangle1" opacity="0.15"
                            d="M398.633 107.823C398.164 108.131 397.615 108.386 397.227 108.774C392.102 113.859 386.99 118.958 381.904 124.083C367.25 138.831 352.597 153.592 337.943 168.353C322.539 183.863 307.122 199.374 291.719 214.897C277.627 229.083 263.549 243.282 249.457 257.467C233.599 273.433 217.727 289.398 201.882 305.377C201.039 306.234 200.276 307.184 199.553 308C197.479 306.046 195.539 304.226 193.625 302.379C193.13 301.898 192.742 301.309 192.246 300.827C178.342 286.909 164.397 273.005 150.52 259.073C135.197 243.697 119.927 228.28 104.631 212.877C90.017 198.156 75.4032 183.435 60.7895 168.728C45.346 153.177 29.8891 137.64 14.459 122.076C10.2435 117.834 6.10825 113.511 1.90613 109.255C1.47788 108.814 0.889031 108.533 0.380493 108.185C0.380493 92.5673 0.380493 76.9499 0.380493 61.3458C0.848883 61.667 1.39755 61.9079 1.78565 62.3093C3.49862 64.0624 5.13134 65.9092 6.8577 67.649C22.0335 82.9453 37.2093 98.2282 52.3986 113.511C67.735 128.955 83.0714 144.385 98.3945 159.828C113.316 174.843 128.224 189.872 143.146 204.887C161.426 223.275 179.707 241.663 197.974 260.064C198.376 260.479 198.59 261.081 198.884 261.589C199.192 261.603 199.513 261.616 199.821 261.643C200.102 261.121 200.289 260.505 200.691 260.077C203.782 256.825 206.887 253.586 210.045 250.401C224.311 236.015 238.59 221.642 252.87 207.256C268.313 191.705 283.77 176.155 299.213 160.604C314.135 145.589 329.043 130.56 343.965 115.545C361.71 97.6795 379.469 79.8271 397.227 61.9881C397.615 61.5867 398.164 61.3458 398.646 61.0246V107.864L398.633 107.823Z"
                            fill="#3B3B3B" />
                        <path class="triangle" id="triangle2" opacity="0.4"
                            d="M382.587 0.013855C387.833 0.013855 393.066 0.013855 398.312 0.013855C398.419 0.120916 398.526 0.227976 398.633 0.335036V31.7841C398.084 32.1722 397.456 32.4934 397.001 32.9618C386.08 43.9622 375.173 54.9761 364.253 65.99C349.158 81.2059 334.035 96.4085 318.94 111.625C303.978 126.68 289.03 141.749 274.068 156.804C258.959 172.02 243.864 187.236 228.741 202.425C219.387 211.82 209.992 221.188 200.611 230.569C200.21 230.97 199.781 231.332 199.032 232.028C198.564 231.385 198.256 230.796 197.801 230.341C186.038 218.444 174.261 206.561 162.471 194.69C147.817 179.929 133.163 165.182 118.509 150.421C103.213 135.017 87.9164 119.627 72.6202 104.224C57.8592 89.3559 43.0982 74.4745 28.3239 59.6198C19.4914 50.7472 10.6321 41.9147 1.7728 33.0822C1.3847 32.6941 0.836021 32.4398 0.354248 32.132V0.013855C5.60022 0.013855 10.8328 0.013855 16.0788 0.013855C16.2795 0.375185 16.4134 0.790045 16.681 1.08446C18.6081 3.14538 20.5352 5.23306 22.5158 7.24045C38.5214 23.3664 54.5403 39.4791 70.5459 55.5917C84.892 70.0449 99.2381 84.4981 113.598 98.9512C128.961 114.421 144.324 129.919 159.714 145.362C172.427 158.129 185.194 170.856 197.935 183.596C198.376 184.038 198.845 184.453 199.648 185.215C200.103 184.546 200.41 183.957 200.852 183.502C213.217 171.003 225.61 158.517 237.989 146.045C252.79 131.136 267.591 116.228 282.392 101.333C297.795 85.8229 313.199 70.3125 328.615 54.8021C346.294 37.0167 363.972 19.2446 381.624 1.45917C382.012 1.0577 382.253 0.522392 382.574 0.0406195L382.587 0.013855Z"
                            fill="#3B3B3B" />
                        <path class="triangle" id="triangle3" opacity="0.75"
                            d="M44.9716 0.0133829C60.482 0.0133829 75.9924 0.0133829 91.5028 0.0133829C91.824 0.481773 92.0648 1.03046 92.4529 1.43194C104.564 13.6636 116.675 25.8819 128.8 38.1002C144.016 53.4232 159.232 68.7463 174.461 84.0559C182.304 91.9383 190.186 99.7939 198.055 107.649C198.456 108.051 198.885 108.426 199.661 109.135C200.076 108.519 200.343 107.957 200.745 107.542C207.744 100.409 214.743 93.2765 221.782 86.1838C238.042 69.7901 254.315 53.4099 270.615 37.043C282.392 25.2262 294.209 13.4495 305.985 1.63267C306.454 1.16428 306.775 0.548686 307.163 0C322.566 0 337.97 0 353.373 0C353.212 0.321182 353.119 0.709277 352.878 0.963546C351.366 2.6096 349.867 4.28242 348.288 5.87495C332.282 22.001 316.263 38.1136 300.258 54.2262C286.326 68.2645 272.395 82.3028 258.45 96.3411C243.275 111.624 228.085 126.92 212.909 142.19C208.841 146.285 204.746 150.367 200.664 154.448C200.263 154.85 199.835 155.238 199.059 155.987C198.644 155.385 198.376 154.85 197.975 154.435C191.538 147.877 185.114 141.307 178.637 134.776C163.849 119.854 149.034 104.96 134.233 90.0513C118.937 74.648 103.667 59.2313 88.3444 43.8547C74.3061 29.7628 60.2143 15.7111 46.1626 1.63267C45.6942 1.16428 45.373 0.548686 44.9716 0V0.0133829Z"
                            fill="#3B3B3B" />
                        <path class="triangle" id="triangle4"
                            d="M278.283 0.0133829C275.098 3.2252 271.9 6.4504 268.715 9.66222C259.561 18.8828 250.394 28.09 241.241 37.3106C227.791 50.8538 214.355 64.3836 200.919 77.9267C200.357 78.4888 199.781 79.0241 199.5 79.2784C196.329 76.2138 193.157 73.2696 190.106 70.205C181.635 61.7338 173.217 53.2225 164.773 44.7246C150.119 29.977 135.465 15.2294 120.824 0.481772C120.677 0.334564 120.543 0.160591 120.409 0C135.92 0 151.43 0 166.941 0C170.085 3.19844 173.15 6.46378 176.375 9.56854C184.177 17.0762 192.06 24.5035 199.942 32.0111C201.936 30.0305 204.626 27.3674 207.302 24.6909C215.466 16.474 223.616 8.24367 231.766 0.0133829C247.276 0.0133829 262.786 0.0133829 278.297 0.0133829H278.283Z"
                            fill="#3B3B3B" />
                    </svg>
                </div>
            </div>

        </div>

        <!-- buttom -->
        <div class="grid lg:grid-cols-4 gap-4">
             <!-- content -->
             <div class="col-span-3">
                <div class="flex justify-center">
                    <img class="w-32" src="./assets/LOGO-WHITE.png" alt="">
                </div>
                <p class="text-center">${language.form[lang].earthquake_text}</p>
                <div class="p-4">
                    <label for="input1">birinci inputu gir</label>
                    <input type="email" id="input1" name="email" class="text-[#1B1B1B] mt-1 p-2 w-full border rounded-md focus:outline-none" placeholder="Enter a Email Adress">
                    <label for="input2">ikinci inputu gir</label>
                    <input type="email" id="input2" name="email" class="text-[#1B1B1B] mt-1 p-2 w-full border rounded-md focus:outline-none" placeholder="Enter a Email Adress">
                    <label for="input3">üçüncü inputu gir</label>
                    <input type="email" id="input3" name="email" class="text-[#1B1B1B] mt-1 p-2 w-full border rounded-md focus:outline-none" placeholder="Enter a Email Adress">
                </div>
                <div class="p-4 flex justify-end">
                    <button onclick="sendEmail()" class="relative inline-flex items-center overflow-hidden gap-[8px] justify-start inline-block px-5 py-3 overflow-hidden group border border-solid border-[#fff] after:transition-all transition-all hover:after:w-full after:h-full after:top-0 after:left-0 after:w-0 after:absolute after:bg-[#1B1B1B] bg-[#3B3B3B] after:duration-500 text-[#fff] stroke-[#fff]">
                        <span class="text relative z-[2] text-[15px] font-normal xs:text-[13px] transition-colors duration-200 ease-in-out">${language.form[lang].send}</span>
                        <span class="relative z-[2] text-[10px] h-[10px] duration-500 group-hover:translate-x-[5px]">
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L1 11"></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>

            <!-- tittle -->
            <div class="lg:col-span-1 hidden lg:block">
                <div class="flex flex-col items-center justify-center">
                    <div
                        class="max-w-md absolute translate-x-[3rem] translate-y-[20rem] px-10">
                        <h1
                            class="title text-[#fff] text-[60px] font-light tracking-[-1.8px] sm:text-[30px] md:text-[45px] md:text-center px-10">
                            ${language.form[lang].title}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>`
};

const showForm3 = () => {
    form.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    lang = document.documentElement.lang;
    form.innerHTML = 
    `       <div class="absolute inset-0 bg-[#1B1B1B]"></div>
    <div class="z-10 p-4 rounded text-[#fff]">
    <div class="absolute top-4 left-4">
        <button onclick="closeForm()" class="flex gap-1.5 text-xl"><span class="stroke-[#fff] fill-[#fff]"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
        <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
    </svg></span> ${language.form[lang].homepage}</button>
    </div>
    <div class="container mx-auto max-w-screen-xl">
    <div class="container mx-auto">
        <!-- top -->
        <div class="grid lg:grid-cols-4 gap-4">
            
            <!-- buttons -->
            <div class="md:col-span-3 grid grid-cols-3 p-4" id="buttons">
                <div class="flex justify-center">
                    <button onclick="showForm1()" data="Bina Durum Tespit"
                        class="button cursor-pointer relative flex overflow-hidden items-start justify-center gap-x-1.5 after:transition-all text-center after:duration-500 transition-all hover:after:w-full after:h-full after:top-0 after:left-0 after:w-0 after:absolute after:bg-[#1B1B1B] bg-[#3B3B3B] text-[#fff] hover:text-[#fff] hover:stroke-[#fff] border border-[#fff] px-6 py-3">
                        <span class="relative z-[2] content-center">
                            ${language.form[lang].building}
                        </span>
                    </button>
                </div>
                <div class="flex justify-center">
                <button onclick="showForm3()" data="Güçlendirme Projesi"
                    class="button cursor-pointer relative flex overflow-hidden items-start justify-center gap-x-1.5 after:transition-all text-center after:duration-500 transition-all hover:after:w-full after:h-full after:top-0 after:left-0 after:w-0 after:absolute after:bg-[#1B1B1B] bg-[#9B9B9B] text-[#fff] hover:text-[#fff] hover:stroke-[#fff] border border-[#fff] px-6 py-3">
                    <span class="relative z-[2] content-center">
                        ${language.form[lang].strength}
                    </span>
                </button>
            </div>
                <div class="flex justify-center">
                    <button onclick="showForm2()" data="Deprem Analiz Rapor"
                        class="button cursor-pointer relative flex overflow-hidden items-start justify-center gap-x-1.5 after:transition-all text-center after:duration-500 transition-all hover:after:w-full after:h-full after:top-0 after:left-0 after:w-0 after:absolute after:bg-[#1B1B1B] bg-[#3B3B3B] text-[#fff] hover:text-[#fff] hover:stroke-[#fff] border border-[#fff] px-6 py-3">
                        <span class="relative z-[2] content-center">
                            ${language.form[lang].earthquake}
                        </span>
                    </button>
                </div>
            </div>

            <!-- svg -->
            <div class="col-span-1 hidden lg:block">
                <div class="absolute ">
                    <svg width="399" height="308" viewBox="0 0 399 308" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path class="triangle" id="triangle1" opacity="0.15"
                            d="M398.633 107.823C398.164 108.131 397.615 108.386 397.227 108.774C392.102 113.859 386.99 118.958 381.904 124.083C367.25 138.831 352.597 153.592 337.943 168.353C322.539 183.863 307.122 199.374 291.719 214.897C277.627 229.083 263.549 243.282 249.457 257.467C233.599 273.433 217.727 289.398 201.882 305.377C201.039 306.234 200.276 307.184 199.553 308C197.479 306.046 195.539 304.226 193.625 302.379C193.13 301.898 192.742 301.309 192.246 300.827C178.342 286.909 164.397 273.005 150.52 259.073C135.197 243.697 119.927 228.28 104.631 212.877C90.017 198.156 75.4032 183.435 60.7895 168.728C45.346 153.177 29.8891 137.64 14.459 122.076C10.2435 117.834 6.10825 113.511 1.90613 109.255C1.47788 108.814 0.889031 108.533 0.380493 108.185C0.380493 92.5673 0.380493 76.9499 0.380493 61.3458C0.848883 61.667 1.39755 61.9079 1.78565 62.3093C3.49862 64.0624 5.13134 65.9092 6.8577 67.649C22.0335 82.9453 37.2093 98.2282 52.3986 113.511C67.735 128.955 83.0714 144.385 98.3945 159.828C113.316 174.843 128.224 189.872 143.146 204.887C161.426 223.275 179.707 241.663 197.974 260.064C198.376 260.479 198.59 261.081 198.884 261.589C199.192 261.603 199.513 261.616 199.821 261.643C200.102 261.121 200.289 260.505 200.691 260.077C203.782 256.825 206.887 253.586 210.045 250.401C224.311 236.015 238.59 221.642 252.87 207.256C268.313 191.705 283.77 176.155 299.213 160.604C314.135 145.589 329.043 130.56 343.965 115.545C361.71 97.6795 379.469 79.8271 397.227 61.9881C397.615 61.5867 398.164 61.3458 398.646 61.0246V107.864L398.633 107.823Z"
                            fill="#3B3B3B" />
                        <path class="triangle" id="triangle2" opacity="0.4"
                            d="M382.587 0.013855C387.833 0.013855 393.066 0.013855 398.312 0.013855C398.419 0.120916 398.526 0.227976 398.633 0.335036V31.7841C398.084 32.1722 397.456 32.4934 397.001 32.9618C386.08 43.9622 375.173 54.9761 364.253 65.99C349.158 81.2059 334.035 96.4085 318.94 111.625C303.978 126.68 289.03 141.749 274.068 156.804C258.959 172.02 243.864 187.236 228.741 202.425C219.387 211.82 209.992 221.188 200.611 230.569C200.21 230.97 199.781 231.332 199.032 232.028C198.564 231.385 198.256 230.796 197.801 230.341C186.038 218.444 174.261 206.561 162.471 194.69C147.817 179.929 133.163 165.182 118.509 150.421C103.213 135.017 87.9164 119.627 72.6202 104.224C57.8592 89.3559 43.0982 74.4745 28.3239 59.6198C19.4914 50.7472 10.6321 41.9147 1.7728 33.0822C1.3847 32.6941 0.836021 32.4398 0.354248 32.132V0.013855C5.60022 0.013855 10.8328 0.013855 16.0788 0.013855C16.2795 0.375185 16.4134 0.790045 16.681 1.08446C18.6081 3.14538 20.5352 5.23306 22.5158 7.24045C38.5214 23.3664 54.5403 39.4791 70.5459 55.5917C84.892 70.0449 99.2381 84.4981 113.598 98.9512C128.961 114.421 144.324 129.919 159.714 145.362C172.427 158.129 185.194 170.856 197.935 183.596C198.376 184.038 198.845 184.453 199.648 185.215C200.103 184.546 200.41 183.957 200.852 183.502C213.217 171.003 225.61 158.517 237.989 146.045C252.79 131.136 267.591 116.228 282.392 101.333C297.795 85.8229 313.199 70.3125 328.615 54.8021C346.294 37.0167 363.972 19.2446 381.624 1.45917C382.012 1.0577 382.253 0.522392 382.574 0.0406195L382.587 0.013855Z"
                            fill="#3B3B3B" />
                        <path class="triangle" id="triangle3" opacity="0.75"
                            d="M44.9716 0.0133829C60.482 0.0133829 75.9924 0.0133829 91.5028 0.0133829C91.824 0.481773 92.0648 1.03046 92.4529 1.43194C104.564 13.6636 116.675 25.8819 128.8 38.1002C144.016 53.4232 159.232 68.7463 174.461 84.0559C182.304 91.9383 190.186 99.7939 198.055 107.649C198.456 108.051 198.885 108.426 199.661 109.135C200.076 108.519 200.343 107.957 200.745 107.542C207.744 100.409 214.743 93.2765 221.782 86.1838C238.042 69.7901 254.315 53.4099 270.615 37.043C282.392 25.2262 294.209 13.4495 305.985 1.63267C306.454 1.16428 306.775 0.548686 307.163 0C322.566 0 337.97 0 353.373 0C353.212 0.321182 353.119 0.709277 352.878 0.963546C351.366 2.6096 349.867 4.28242 348.288 5.87495C332.282 22.001 316.263 38.1136 300.258 54.2262C286.326 68.2645 272.395 82.3028 258.45 96.3411C243.275 111.624 228.085 126.92 212.909 142.19C208.841 146.285 204.746 150.367 200.664 154.448C200.263 154.85 199.835 155.238 199.059 155.987C198.644 155.385 198.376 154.85 197.975 154.435C191.538 147.877 185.114 141.307 178.637 134.776C163.849 119.854 149.034 104.96 134.233 90.0513C118.937 74.648 103.667 59.2313 88.3444 43.8547C74.3061 29.7628 60.2143 15.7111 46.1626 1.63267C45.6942 1.16428 45.373 0.548686 44.9716 0V0.0133829Z"
                            fill="#3B3B3B" />
                        <path class="triangle" id="triangle4"
                            d="M278.283 0.0133829C275.098 3.2252 271.9 6.4504 268.715 9.66222C259.561 18.8828 250.394 28.09 241.241 37.3106C227.791 50.8538 214.355 64.3836 200.919 77.9267C200.357 78.4888 199.781 79.0241 199.5 79.2784C196.329 76.2138 193.157 73.2696 190.106 70.205C181.635 61.7338 173.217 53.2225 164.773 44.7246C150.119 29.977 135.465 15.2294 120.824 0.481772C120.677 0.334564 120.543 0.160591 120.409 0C135.92 0 151.43 0 166.941 0C170.085 3.19844 173.15 6.46378 176.375 9.56854C184.177 17.0762 192.06 24.5035 199.942 32.0111C201.936 30.0305 204.626 27.3674 207.302 24.6909C215.466 16.474 223.616 8.24367 231.766 0.0133829C247.276 0.0133829 262.786 0.0133829 278.297 0.0133829H278.283Z"
                            fill="#3B3B3B" />
                    </svg>
                </div>
            </div>

        </div>

        <!-- buttom -->
        <div class="grid lg:grid-cols-4 gap-4">
             <!-- content -->
             <div class="col-span-3">
                <div class="flex justify-center">
                    <img class="w-32" src="./assets/LOGO-WHITE.png" alt="">
                </div>
                <p class="text-center">${language.form[lang].strength_text}</p>
                <div class="p-4">
                    <label for="input1">birinci inputu gir</label>
                    <input type="email" id="input1" name="email" class="text-[#1B1B1B] mt-1 p-2 w-full border rounded-md focus:outline-none" placeholder="Enter a Email Adress">
                    <label for="input2">ikinci inputu gir</label>
                    <input type="email" id="input2" name="email" class="text-[#1B1B1B] mt-1 p-2 w-full border rounded-md focus:outline-none" placeholder="Enter a Email Adress">
                    <label for="input3">üçüncü inputu gir</label>
                    <input type="email" id="input3" name="email" class="text-[#1B1B1B] mt-1 p-2 w-full border rounded-md focus:outline-none" placeholder="Enter a Email Adress">
                </div>
                <div class="p-4 flex justify-end">
                    <button onclick="sendEmail()" class="relative inline-flex items-center overflow-hidden gap-[8px] justify-start inline-block px-5 py-3 overflow-hidden group border border-solid border-[#fff] after:transition-all transition-all hover:after:w-full after:h-full after:top-0 after:left-0 after:w-0 after:absolute after:bg-[#1B1B1B] bg-[#3B3B3B] after:duration-500 text-[#fff] stroke-[#fff]">
                        <span class="text relative z-[2] text-[15px] font-normal xs:text-[13px] transition-colors duration-200 ease-in-out">${language.form[lang].send}</span>
                        <span class="relative z-[2] text-[10px] h-[10px] duration-500 group-hover:translate-x-[5px]">
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L1 11"></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>

            <!-- tittle -->
            <div class="lg:col-span-1 hidden lg:block">
                <div class="flex flex-col items-center justify-center">
                    <div
                        class="max-w-md absolute translate-x-[3rem] translate-y-[20rem] px-10">
                        <h1
                            class="title text-[#fff] text-[60px] font-light tracking-[-1.8px] sm:text-[30px] md:text-[45px] md:text-center px-10">
                            ${language.form[lang].title}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>`
};

function closeForm() {
    form.classList.add('hidden');
    document.body.style.overflow = 'auto';
};


// email


const sendEmail = () => {
      const data = document.querySelector('#buttons');
      const sub = data.childNodes[3].childNodes[1].attributes.data.value;
      

      const emailData = {
          subject: sub,
          text: 'Bu bir test e-postasıdır.'
        };



    fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };
  
