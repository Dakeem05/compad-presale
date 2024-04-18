<script setup>
import { set } from "~/node_modules/nuxt/dist/app/compat/capi";
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi'
import { useWeb3Modal } from '@web3modal/wagmi/vue'  
import { bsc } from 'viem/chains'
import { reconnect } from '@wagmi/core'
const projectId = '064d0a124217d401cda6999baf496215'

// 2. Create wagmiConfig
const metadata = {
  name: 'Compad | Private Presale',
  description: 'Compad private presale website',
  url: 'https://compad-presale.vercel.app/', // origin must match your domain & subdomain
  // url: 'http://localhost:3000/', // origin must match your domain & subdomain
  icons: ['https://pbs.twimg.com/profile_images/1685353964450004993/7q2iSxcW_400x400.jpg']
}

const chains = [bsc]
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  // ...wagmiOptions // Optional - Override createConfig parameters
})


// const modal = useWeb3Modal(createWeb3Modal({
//   wagmiConfig: config,
//   projectId,
//   enableAnalytics: true, // Optional - defaults to your Cloud configuration
//   enableOnramp: true // Optional - false as default
// }))
   let scrolled = ref(false);
  let scroll = ref(0)
  let bnbBalance = ref(0)
    let ul = ref(null);
    const side = ref(null)
    let isSide = ref(false);
    let downP = ref(false);
    let btnText = ref('Connect wallet');
    let isConnected = ref(false);
        const scrollHandler = () => {
          scroll.value = window.scrollY
           if(scroll.value !== 0 ){
               scrolled.value = true;
            //    alert(scrolled.value)
            if (!isSide.value){
    }
            } 
            else {
                scrolled.value = false;
                 if (!isSide.value){
        
    }
            }
        }

  onMounted( async ()=>{
    window.addEventListener('scroll', scrollHandler)
 
  })
  onBeforeUnmount(()=> {
    window.removeEventListener('scroll', scrollHandler)
  })

  
  
   function sideBarOpen (){
    isSide.value = true; 
     side.value.classList.remove('-translate-x-[105%]');
     emit('openBar', isSide.value)
  }
  function sideBarClose (){
      isSide.value = false;
      side.value.classList.add('-translate-x-[105%]');
      emit('closeBar', isSide.value)
  }

  function routeHandler (route) {
     isSide.value = false;
      side.value.classList.add('-translate-x-[105%]');
      emit('closeBar', isSide.value)
      emit('route', route)
    activeRoute.value = route
  }

//   async function connectHandler () {
//     if(typeof window.ethereum != undefined){
//       try {
//         const accounts = await window.ethereum.request({ method: 'eth_accounts' });
//         const account = accounts[0];
//         isConnected.value = true;
//         const chainId = '0x38';
//         const currentChainId = await getCurrentChainId();
//         try {
//           if (currentChainId === chainId) {
//             // return;
//           } else {
//             await window.ethereum.request({
//               method: 'wallet_addEthereumChain',
//               params: [
//                 {
//                   chainId,
//                   chainName: 'Binance Smart Chain',
//                   nativeCurrency: {
//                     name: 'BNB',
//                     symbol: 'bnb',
//                     decimals: 18,
//                   },
//                   rpcUrls: ['https://bsc-dataseed.binance.org/'],
//                   blockExplorerUrls: ['https://bscscan.com/'],
//                 },
//               ],
//             });
//           }
//           await window.ethereum.request({
//             method: 'wallet_switchEthereumChain',
//             params: [{ chainId }],
//           });
//         } catch (error) {
//           console.error('Error adding and switching to BSC network:', error);
//         }
//         async function getCurrentChainId() {
//           try {
//             const chainId = await window.ethereum.request({
//               method: 'eth_chainId',
//             });
//             return chainId;
//           } catch (error) {
//             console.error('Error getting current chain ID:', error);
//             return null;
//           }
//         }
//         // const account = await connectWallet();
//         // if (account) {
//         //   const balance = await getBSCBalance(account);
//         //   bnbBalance.value = balance;
//         //   console.log(account);
//         //   console.log(bnbBalance.value);
//         // }
//         console.log(account);
//         try {
//           const balance = await window.ethereum.request({
//             method: 'eth_getBalance',
//             params: [account, 'latest'],
//           });

//         // Convert balance from Wei to BNB
//         // const balanceInBNB = window.ethereum.utils.fromWei(balance, 'ether');
//         // console.log('BSC Balance:', balanceInBNB, 'BNB');
//         // console.log(balanceInBNB);
//         // console.log('answer');
// console.log(await window.ethereum.request({method: 'eth_utils'}));
//         if (window.ethereum.request({method: 'eth_utils'})) {
//       // Convert balance from Wei to BNB
//       console.log('fixed');
//       const balanceInBNB = window.ethereum.request({method: 'eth_utils'}).fromWei(balance, 'ether');
//       console.log('BSC Balance:', balanceInBNB, 'BNB');
//       return balanceInBNB;
//     } else {
//       console.error('window.ethereum.utils is undefined');
//       return 'Error fetching balance';
//     }
//         // return balanceInBNB;
//       } catch (error) {
//         console.error('Error fetching BSC balance:', error);
//         // return 'Error fetching balance';
//       }
//       console.log('after');

//         return account;
//       } catch (error) {
//         isConnected.value = false;
//         btnText.value = 'Connection denied';
//         setTimeout(() => {
//           btnText.value = 'Connect wallet';
//         }, 2000);
//       }
//     } else {
//       isConnected.value = false;
//       btnText.value = 'Install metamask';
//     }
//   }

async function connectHandler(){
  reconnect(config)
  // 3. Create modal
  createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
  })
  // modal.open();
isConnected.value = true;
}
</script>


<template>
  <section class="bg-[rgba(255,_255,_255,_0.14)]  [box-shadow:0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-filter backdrop-blur-[12.6px] border-b-[1px] border-b-[solid] border-b-[rgba(255,255,255,0.75)] lg:hidden  pt-[0.7rem] pb-[0.7rem] px-[0.7rem] xs:px-[2rem] sm:px-[3rem] z-[60] fixed top-0 left-0 flex right-0 w-full">
    <button v-if="isConnected" @click="connectHandler" class="glass text-white py-3 px-[1rem] font-medium rounded-md">
                  <div >Buy presale <span class="text-[#FFA500] font-bold">$COM</span></div>
                </button>
                <button v-if="!isConnected" @click="connectHandler" class="bg-white py-3 px-[1rem] font-medium rounded-md">
                  <span  class="text-white"><w3m-button style="color: white;"/></span>
                </button>
            <div class=" w-fit absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 mx-auto">
              <router-link to="/" class="text-[2.2rem] text-black flex gap-2 font-surfer font-[400]">
                <div class=" flex">
                  <figure class="w-[5rem] sm:w-[8rem]"><img src="/public/images/logo.png" class="object-contain" alt=""></figure>
                  <figcaption class="text-[#FFA500] hidden md:block text-3xl font-bold pt-[12%]">Compad</figcaption>
                </div>
              </router-link>
            </div>
                <p  class="text-white absolute right-[0.5rem] text-[1rem] pr-[1rem]  mt-[1rem] ">
                    <button @click="sideBarOpen" v-if="!isSide"><IconsMenu/></button>
                    <button @click="sideBarClose" class="text-[2rem]" v-else><IconsCloseIcon/></button>
                </p>
            <div>
        </div>
        </section>
    <div ref="side" class="bg-[rgba(0,0,0,0.849)] lg:hidden fixed w-[100vw] text-white  -translate-x-[105%] transition-transform duration-500 overflow-y-auto overscroll-y-none h-screen z-[59] top-[3.3rem] pt-[4.5rem] px-[1rem] xs:px-[2rem] sm:px-[3rem]">
         <ul ref="ul" id="" :class="{'h' : !downP, ' pb-[65%] ' : downP}" class="lg:hidden ht relative flex flex-col gap-[2rem]  w-full top-0 font-bold font-madeForDisplayMedium">
          <li class="hover:text-[#FFA500]"><a href="https://compad.org/?data=#About" target="_blank" rel="noopener noreferrer">About</a></li>
                    <li class="hover:text-[#FFA500]"><a href="https://compad.org/?data=#Roadmap" target="_blank" rel="noopener noreferrer">Roadmap</a></li>
                    <li class="hover:text-[#FFA500]"><a href="https://compad-1.gitbook.io/compad-white-paper" target="_blank" rel="noopener noreferrer">Whitepaper</a></li>
                    <button v-if="isConnected" @click="connectHandler" class="glass text-white py-3 px-[2rem] font-medium mt-[1.4rem] rounded-md">
                  <div >Buy presale <span class="text-[#FFA500] font-bold">$COM</span></div>
                </button>
                <button v-if="!isConnected" @click="connectHandler" class="bg-white py-3 px-[2rem] font-medium mt-[1.4rem] rounded-md">
                  <span  class="text-white"><w3m-button style="color: white;"/></span>
                </button>
        </ul>
    </div>
    <section :class="{'bg-[rgba(255,_255,_255,_0.44)]  [box-shadow:0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-filter backdrop-blur-[12.6px] border-[1px] border-[solid] border-[rgba(255,255,255,0.75)]  w-[100%] top-[0.6rem] xl:w-[1200px] px-[2.5rem] fixed  right-0 left-0 xl:mx-auto  rounded-[4rem] z-[60] dark:bg-transparent pt-[0.2rem] pb-[0.5rem] xl:pb-[0.5rem]' :scrolled === true, 'relative text-white border-b-[1px] backdrop-blur-[8.6px] border-b-[solid] border-b-[rgba(255,255,255,0.75)] xl:px-0 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.8rem] pb-[0.7rem] flex' : scrolled === false, 'hidden lg:block' : isSide}" class="hidden lg:block ">
        <div class="flex text-white max-w-7xl mx-auto h-fit relative w-full justify-between">
            <div class=" flex">
                <figure class="w-[8rem]"><img src="/public/images/logo.png" class="object-contain" alt=""></figure>
                <figcaption class="text-[#FFA500] text-3xl font-bold pt-[12%]">Compad</figcaption>
            </div>
            <div>
                <ul class="flex gap-[2rem] text-xl pt-[12%]">
                    <li class="hover:text-[#FFA500]"><a href="https://compad.org/?data=#About" target="_blank" rel="noopener noreferrer">About</a></li>
                    <li class="hover:text-[#FFA500]"><a href="https://compad.org/?data=#Roadmap" target="_blank" rel="noopener noreferrer">Roadmap</a></li>
                    <li class="hover:text-[#FFA500]"><a href="https://compad-1.gitbook.io/compad-white-paper" target="_blank" rel="noopener noreferrer">Whitepaper</a></li>
                </ul>
            </div>
            <div>
              
                <button v-if="isConnected" @click="connectHandler" class="glass py-3 px-[2rem] font-medium mt-[1.4rem] rounded-md">
                  <div >Buy presale <span class="text-[#FFA500] font-bold">$COM</span></div>
                </button>
                <button v-if="!isConnected" @click="connectHandler" class="bg-white py-3 px-[2rem] font-medium mt-[1.4rem] rounded-md">
                  <span  class="text-white"><w3m-button style="color: white;"/></span>
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .glass{
        background: rgba(255, 255, 255, 0.19);
        /* border-radius: 16px; */
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(14.1px);
        -webkit-backdrop-filter: blur(14.1px);
        border: 1px solid rgba(255, 255, 255, 1);
    }
    .glass:hover{
        border: 1px solid #FFA500;

    }
</style>