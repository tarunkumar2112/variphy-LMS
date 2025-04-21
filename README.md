
# Variphy LMS - Netlify Functions

This repository contains the backend API functions for interacting with the Variphy TalentLMS.

## Deployed App
Live deployment: [Variphy TalentLMS](http://variphy-talentlms.netlify.app/)

## Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/tarunkumar2112/variphy-LMS.git
   cd variphy-LMS
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables.
   ```bash
   BASE_URL=<your_base_url>
   API_KEY=<your_api_key>
   ```

4. Run the Netlify dev server to test locally:
   ```bash
   netlify dev
   ```

## Endpoints

### 1. `getCourses`

- **Function:** Retrieves all courses.
- **Test URL (Live):** 
  ```
  https://variphy-talentlms.netlify.app/.netlify/functions/getCourses
  ```

### 2. `getCourseByID`

- **Function:** Retrieves a single course by its ID.
- **Test URL (Live):** 
  ```
  https://variphy-talentlms.netlify.app/.netlify/functions/getCourseByID?id=2
  ```

### 3. `getUsers`

- **Function:** Retrieves all users.
- **Test URL (Live):** 
  ```
  https://variphy-talentlms.netlify.app/.netlify/functions/getUsers
  ```

### 4. `getUserByID`

- **Function:** Retrieves a user by their ID.
- **Test URL (Live):** 
  ```
  https://variphy-talentlms.netlify.app/.netlify/functions/getUserByID?id=15
  ```

### 5. `getUserByEmail`

- **Function:** Retrieves a user by their email.
- **Test URL (Live):** 
  ```
  https://variphy-talentlms.netlify.app/.netlify/functions/getUserByEmail?email=tarunkumarz211286@gmail.com
  ```

### 6. `getSiteInfo`

- **Function:** Retrieves site information.
- **Test URL (Live):** 
  ```
  https://variphy-talentlms.netlify.app/.netlify/functions/getSiteInfo
  ```

### 7. `getGroups`

- **Function:** Retrieves all groups.
- **Test URL (Live):** 
  ```
  https://variphy-talentlms.netlify.app/.netlify/functions/getGroups
  ```

### 8. `getGroupByID`

- **Function:** Retrieves a group by its ID.
- **Test URL (Live):** 
  ```
  https://variphy-talentlms.netlify.app/.netlify/functions/getGroupByID?id=1
  ```

### 9. `getCategories`

- **Function:** Retrieves all categories.
- **Test URL (Live):** 
  ```
  https://variphy-talentlms.netlify.app/.netlify/functions/getCategories
  ```

### 10. `getCategoryByID`

- **Function:** Retrieves a category by its ID.
- **Test URL (Live):** 
  ```
  https://variphy-talentlms.netlify.app/.netlify/functions/getCategoryByID?id=4
  ```

### 11. `getBranches`

- **Function:** Retrieves all branches.
- **Test URL (Live):** 
  ```
  https://variphy-talentlms.netlify.app/.netlify/functions/getBranches
  ```

### 12. `getBranchByID`

- **Function:** Retrieves a branch by its ID.
- **Test URL (Live):** 
  ```
  https://variphy-talentlms.netlify.app/.netlify/functions/getBranchByID?id=2
  ```

## Deployment Instructions

To deploy to Netlify:

1. Push your changes to your GitHub repository.
2. Link your GitHub repository with your Netlify account.
3. Netlify will automatically detect the build settings (functions directory).
4. The deployment will happen automatically.

## Additional Notes

- Ensure you have the correct environment variables set up for `BASE_URL` and `API_KEY` in the `.env` file.
- The functions are all deployed as serverless functions and can be accessed via the URLs as described above.

