import { stitch } from "@google/stitch-sdk";

async function main() {
  try {
    const project = stitch.project("7290670141818955846");
    const screens = await project.screens();
    
    for (const screen of screens) {
      console.log(`Screen ID: ${screen.id}`);
      const htmlUrl = await screen.getHtml();
      const imageUrl = await screen.getImage();
      console.log(`HTML URL: ${htmlUrl}`);
      console.log(`Image URL: ${imageUrl}`);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
