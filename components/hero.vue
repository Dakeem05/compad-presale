<template>
    <section class="bg-[#050126] w-full h-fit pb-[4rem]">
        <CommonNavBar/>  
        <div class="max-w-6xl mx-auto pt-[5rem] lg:mpt-0 flex flex-col lg:flex-row  px-[0.8rem] xs:px-[1rem] sm:px-[2rem] xl:px-[0]">
            <article class="mt-[5rem] text-white w-full lg:w-[50%]">
                <h1 class="text text-[2rem] sm:text-[2.5rem] sm:hidden font-bold">Be at the Forefront of Innovation with COMPAD</h1>
                <h1 class="text text-[2rem] hidden sm:block sm:text-[2.5rem] font-bold">Be at the Forefront of </h1>
                <h1 class="text text-[2rem] hidden sm:block sm:text-[2.5rem] -mt-3 font-bold">Innovation with COMPAD</h1>
                <p class="text-lg mt-[1rem]">Invest in the Future with Confidence: COMPAD's Highly-Vetted Web3 Projects, Supported by Top Creators and Funds.</p>
                <div class="mt-[2rem] flex gap-[1rem]">
                    <a href="https://compad-1.gitbook.io/compad-white-paper" class="box font-semibold text-lg" target="_blank" rel="noopener noreferrer">Whitepaper</a>
                    <a href="https://play.google.com/store/apps/details?id=com.compad.app&hl=en&gl=US" class="box font-semibold text-lg" target="_blank" rel="noopener noreferrer">Launchpad</a>
                </div>
            </article>
            <div class="w-full lg:w-[50%]">
                <img src="/public/HeroPic.webp" class="object-contain animated mt-[2rem] pulse infinite" style="animation-duration: 3s; width: 200%;" alt="">
                
            </div>
        </div>
    </section>
</template>

<style scoped>
    .text{
        background-image: linear-gradient(to right, #cd20dd, #dcdcf8);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
    .box {
        border-image: url("data:image/svg+xml,%3Csvg width='316' height='55' viewBox='0 0 316 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.5667 0.961914C10.2336 0.961914 9.9142 1.09422 9.67869 1.32973L0.367819 10.6406C0.132309 10.8761 0 11.1955 0 11.5286V49.9387C0 52.7129 2.24899 54.9619 5.02326 54.9619H305.433C305.766 54.9619 306.086 54.8296 306.321 54.5941L315.632 45.2832C315.868 45.0477 316 44.7283 316 44.3952V5.98517C316 3.2109 313.751 0.961914 310.977 0.961914H10.5667ZM314.744 38.6363L299.674 53.7061H5.02326C2.94256 53.7061 1.25581 52.0194 1.25581 49.9387V17.2875L8.7907 9.75261L16.3256 2.21773C16.3256 2.21773 308.896 2.21773 310.977 2.21773C313.057 2.21773 314.744 3.90447 314.744 5.98517V38.6363Z' fill='%23d03fea'/%3E%3Cpath d='M299.674 53.7061L314.744 38.6363V5.98517C314.744 3.90447 313.057 2.21773 310.977 2.21773H16.3256L8.7907 9.75261L1.25581 17.2875V49.9387C1.25581 52.0194 2.94256 53.7061 5.02326 53.7061H299.674Z' fill='rgba(208, 63, 226, 0.55)'/%3E%3C/svg%3E");
        border-style: solid;
        background-clip: padding-box;
        background-color: rgba(208, 63, 226, 0.55);
        border-width: 15px;
        border-image-slice: 16;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        width: fit-content;
        height: fit-content;
        z-index: 0;
    }
    @keyframes pulse {
        0% {
            transform: scaleX(1);
        }
        50% {
            transform: scale3d(1.05, 1.05, 1.05);
        }
        100% {
            transform: scaleX(1);
        }
    }   
    .pulse {
        animation-name: pulse;
    }    
    .animated {
        animation-duration: 1s;
        animation-fill-mode: both;
    }
    .animated.infinite {
        animation-iteration-count: infinite;
    }
</style>