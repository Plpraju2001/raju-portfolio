# How to Get Your LinkedIn Profile Picture URL

## Step-by-Step Instructions:

### Method 1: Direct LinkedIn URL
1. Go to your LinkedIn profile: https://www.linkedin.com/in/lakshmipathirajup
2. Right-click on your profile picture
3. Select "Copy image address" or "Copy image URL"
4. The URL will look something like: `https://media.licdn.com/dms/image/D4E03AQF8JqJqJqJqJq/profile-displayphoto-shrink_400_400/0/1234567890?e=1234567890&v=beta&t=abc123`

### Method 2: LinkedIn API (Alternative)
1. Go to your LinkedIn profile
2. View page source (Ctrl+U or Cmd+U)
3. Search for "profile-displayphoto"
4. Copy the full image URL

## How to Update Your Portfolio:

1. **Open the file**: `src/app/page.tsx`
2. **Find these lines** (around line 104 and 221):
   ```javascript
   const imageUrl = 'https://media.licdn.com/dms/image/D4E03AQF8JqJqJqJqJq/profile-displayphoto-shrink_400_400/0/1234567890?e=1234567890&v=beta&t=abc123';
   ```
3. **Replace the URL** with your actual LinkedIn profile picture URL
4. **Save the file**
5. **Build and deploy** your portfolio

## Important Notes:

- ✅ **Auto-Updates**: When you change your LinkedIn profile picture, your portfolio will automatically show the new picture
- ✅ **Fallback**: If the LinkedIn image fails to load, it will show a placeholder with your initial "L"
- ✅ **Loading States**: Shows a nice loading spinner while the image loads
- ✅ **Responsive**: Works perfectly on all devices

## Current Status:
- The portfolio is set up with a placeholder URL
- You need to replace it with your actual LinkedIn profile picture URL
- Once updated, your profile picture will appear in both the Hero section and About section

## After Updating:
1. Run `npm run build`
2. Run `git add .`
3. Run `git commit -m "Update LinkedIn profile picture URL"`
4. Run `git push origin main`
5. Run `npx vercel --prod`

Your portfolio will then show your actual LinkedIn profile picture!
