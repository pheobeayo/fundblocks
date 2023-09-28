import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from "./pages/sign-up/Signup";
import Signin from "./pages/sign-in/Signin";
import Home from "./pages/home/Home";
import SignupSubmit from "./pages/sign-up/SignupSubmit";
import ProjectCreation from "./pages/project-creation/CreateProject";
import ProjectDetails from "./pages/project-details/ProjectDetails";
import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    // mainnet,
    polygon,
    //polygonMumbai,
    // optimism,
    // arbitrum,
    // goerli,
    // ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});









function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains}
    theme={darkTheme({
      accentColor: 'rgb(93,228,247)'
    })}>
   
    <BrowserRouter>
    <Routes>
      
      <Route  path='/' element={<Home/>} />
      <Route  path="/sign-up" element={<Signup />} />
      <Route  path="/sign-in" element={<Signin />} />
      <Route  path="/signup-submit" element={<SignupSubmit />} />
      <Route  path='/create-project' element={<ProjectCreation/>}/>
      <Route  path='/project-details' element={<ProjectDetails/>} />
      
      
    </Routes>
    </BrowserRouter>

    </RainbowKitProvider>
    </WagmiConfig> 
    
  );
}

export default App;

