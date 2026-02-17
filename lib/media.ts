/**
 * MEDIA CONFIGURATION
 * Pulls the base download URL from your .env.local file.
 * Ensure you have NEXT_PUBLIC_MEDIA_DOWNLOAD defined there.
 */
const DOWNLOAD_BASE = process.env.NEXT_PUBLIC_MEDIA_DOWNLOAD;

/**
 * getImagePath
 * @param id - The filename/UUID from your media server (e.g., 'zz3.jpg')
 * @returns The full URL to be used in <img> tags.
 */
export const getImagePath = (id: string): string => {
  if (!id) return "";
  
  // Safety check: If the ID is already a full URL (starts with http), return it directly.
  if (id.startsWith('http')) return id;
  
  // Combines the base URL from your .env with the specific file ID.
  return `${DOWNLOAD_BASE}/${id}`;
};

/**
 * BRAND ASSETS
 * High-priority images like logos and hero banners.
 * Use these variables in your Navbar and Hero components.
 */
export const BRAND_ASSETS = {
  // Your specific logo filename from Bizonance
  LOGO:
        "1770979428723-rtbac.png",
  //    "1770980700100-LOGOroyal.png",
  //    "1770980095941-rtbca5.png",
  //    "1770971906670-rtbca2.jpg.jpeg",
    
  // You can use the same image or a different one for the hero background
  
  MAIN_HERO: "1770982212574-royalmain.png",
  //   "1770978971780-pp.png",
        
  
  // Placeholder for the Artist Profile section
  ARTIST_PROFILE: "artist-display.jpg" 
};

/**
 * IMAGE GALLERY DATA
 * A separate constant to manage your portfolio. 
 * Adding a new image to your website is as simple as adding a new object here.
 */
export const GALLERY_ITEMS = [
  {
    id: "1770972270544-rtbca1.jpg.jpeg",
    title: "Signature Royal Glow",
    category: "Bridal",
    description: "Full HD bridal makeover with traditional jewelry styling."
  },
  {
    id: "work-sample-2.jpg", 
    title: "Academy Masterclass",
    category: "Academy",
    description: "Live demonstration for our Professional Makeup Batch."
  },
  {
    id: "work-sample-3.jpg",
    title: "Reception Glam",
    category: "Party",
    description: "Elegant evening look with soft curls and shimmering eyes."
  },
  // To add more, just upload to Bizonance, get the ID, and paste a new object below:
];

/**
 * SERVICE CATEGORY IMAGES
 * Used specifically for the cards on your Services page.
 */
export const SERVICE_IMAGES = {
  BRIDAL: "bridal-service-thumb.jpg",
  ACADEMY: "academy-service-thumb.jpg",
  HAIRSTYLING: "hair-service-thumb.jpg"
};