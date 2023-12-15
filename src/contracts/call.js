import { ethers } from "ethers";
import abi from "../contract/fundblock.json";


const contractAddr = "0x3a713416811728E7Ab977C6A3E3DC20F5aC9d1c7";

const getContract = async () => {
  if (window.ethereum) {
    const provider = new ethers.BrowserProvider(window.ethereum); // A connection to the Ethereum network
    var signer = await provider.getSigner(); // Holds your private key and can sign things
    const Contract = new ethers.Contract(contractAddr, abi, signer);
    console.log(Contract)
    return Contract;
  } else {
    alert("No wallet detected");
  }
};

export async function addProfile(name, location, mail) {
    const fundContract = await getContract();
    try {
        var tx = await fundContract.createProfile(
            name,
            location,
            mail
          );
          await tx.wait();
          console.log(tx.hash)
    } catch (error) {
        console.log(error);
    }
  }

export async function getSeller(owner) {
    const greenContract = await getContract();
    try {
        var seller = await greenContract.getSeller(owner);
        return seller;
      } catch (error) {
        console.log(error);
      }
}

export async function sellProduct(name, image, description, price, weight) {
    const greenContract = await getContract();
    try {
        var tx = await greenContract.listProduct(name, image, description, price, weight);
        await tx.wait();
      } catch (error) {
        console.log(error);
      }
}

export async function getProducts() {
    const greenContract = await getContract();
    try {
        var products = await greenContract.getAllproduct();
        const structuredProducts = products.map((product) => ({
            owner: product.owner,
            name: product.name,
            description: product.description,
            image: product.image,
            price: product.price,
            location: product.location,
            totalWeight: product.totalWeight,
            sold: product.sold,
            progress: product.inProgress
        }));

        return structuredProducts;
      } catch (error) {
        console.log(error);
      }
}


export async function getSellers() {
    const greenContract = await getContract();
    try {
        var sellers = await greenContract.getallSeller();
        const structuredSellers = sellers.map((seller) => ({
            id: seller.sellerId,
            address: seller.sellerAddress,
            name: seller.name,
            location: seller.location,
            mail: seller.mail,
            payout: seller.totalPayout,
            totalWeight: seller.recycledWeight,
            recycled: seller.recycled
        }));

        return structuredSellers;
      } catch (error) {
        console.log(error);
      }
}