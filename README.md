
# Variphy LMS - API Integration

This project integrates with the Variphy TalentLMS API, providing various endpoints to interact with the LMS platform. The app is deployed on Netlify, and you can access the live version through the link below. The purpose of this README is to guide you through local setup, endpoint testing, and deployment to production.

## Live Version
- URL: [variphy-talentlms.netlify.app](http://variphy-talentlms.netlify.app/)

## GitHub Repository
- URL: [Variphy LMS GitHub](https://github.com/tarunkumar2112/variphy-LMS)

## Project Setup

### Requirements
- Node.js (preferably the latest LTS version)
- npm or yarn
- Netlify CLI for local deployment and testing

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tarunkumar2112/variphy-LMS.git
   cd variphy-LMS
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following environment variables:
   - `BASE_URL`: The base URL for API requests (provided by the TalentLMS API).
   - `API_KEY`: Your API key for authorization (used in Basic Auth for API requests).
   
4. Run the app locally:
   ```bash
   netlify dev
   ```

   This will start the local server and you can visit it at [http://localhost:8888](http://localhost:8888) to test the endpoints.

## Available API Endpoints

Below is a list of all the available API endpoints along with the respective files that handle them.

### 1. **Get All Courses**
- **Endpoint**: `/getCourses`
- **File**: `getCourses.js`
- **Description**: Fetches all courses from the TalentLMS platform.
- **Usage**:
   - Make a GET request to `/getCourses` to fetch the course list.
   - Example: Visit [http://localhost:8888/getCourses](http://localhost:8888/getCourses) for local testing or use the live domain: [http://variphy-talentlms.netlify.app/getCourses](http://variphy-talentlms.netlify.app/getCourses)

### 2. **Get a Single Course by ID**
- **Endpoint**: `/getCourseById`
- **File**: `getCourseById.js`
- **Description**: Fetches a single course by its ID.
- **Usage**:
   - Make a GET request to `/getCourseById/{course_id}` to fetch details for a specific course.
   - Example: Visit [http://localhost:8888/getCourseById/{course_id}](http://localhost:8888/getCourseById/{course_id}) for local testing or use the live domain: [http://variphy-talentlms.netlify.app/getCourseById/{course_id}](http://variphy-talentlms.netlify.app/getCourseById/{course_id})

### 3. **Get Users**
- **Endpoint**: `/getUsers`
- **File**: `getUsers.js`
- **Description**: Fetches a list of all users.
- **Usage**:
   - Make a GET request to `/getUsers` to fetch all users.
   - Example: Visit [http://localhost:8888/getUsers](http://localhost:8888/getUsers) for local testing or use the live domain: [http://variphy-talentlms.netlify.app/getUsers](http://variphy-talentlms.netlify.app/getUsers)

### 4. **Get User by ID**
- **Endpoint**: `/getUserById`
- **File**: `getUserById.js`
- **Description**: Fetches a user by their ID.
- **Usage**:
   - Make a GET request to `/getUserById/{user_id}`.
   - Example: Visit [http://localhost:8888/getUserById/{user_id}](http://localhost:8888/getUserById/{user_id}) for local testing or use the live domain: [http://variphy-talentlms.netlify.app/getUserById/{user_id}](http://variphy-talentlms.netlify.app/getUserById/{user_id})

### 5. **Get User by Email**
- **Endpoint**: `/getUserByEmail`
- **File**: `getUserByEmail.js`
- **Description**: Fetches a user by their email address.
- **Usage**:
   - Make a GET request to `/getUserByEmail/{user_email}`.
   - Example: Visit [http://localhost:8888/getUserByEmail/{user_email}](http://localhost:8888/getUserByEmail/{user_email}) for local testing or use the live domain: [http://variphy-talentlms.netlify.app/getUserByEmail/{user_email}](http://variphy-talentlms.netlify.app/getUserByEmail/{user_email})

### 6. **Get Site Info**
- **Endpoint**: `/getSiteInfo`
- **File**: `siteInfo.js`
- **Description**: Fetches site information for the LMS platform.
- **Usage**:
   - Make a GET request to `/getSiteInfo`.
   - Example: Visit [http://localhost:8888/getSiteInfo](http://localhost:8888/getSiteInfo) for local testing or use the live domain: [http://variphy-talentlms.netlify.app/getSiteInfo](http://variphy-talentlms.netlify.app/getSiteInfo)

### 7. **Get Groups**
- **Endpoint**: `/getGroups`
- **File**: `getGroups.js`
- **Description**: Fetches a list of all user groups.
- **Usage**:
   - Make a GET request to `/getGroups`.
   - Example: Visit [http://localhost:8888/getGroups](http://localhost:8888/getGroups) for local testing or use the live domain: [http://variphy-talentlms.netlify.app/getGroups](http://variphy-talentlms.netlify.app/getGroups)

### 8. **Get Group by ID**
- **Endpoint**: `/getGroupById`
- **File**: `getGroupById.js`
- **Description**: Fetches a specific group by its ID.
- **Usage**:
   - Make a GET request to `/getGroupById/{group_id}`.
   - Example: Visit [http://localhost:8888/getGroupById/{group_id}](http://localhost:8888/getGroupById/{group_id}) for local testing or use the live domain: [http://variphy-talentlms.netlify.app/getGroupById/{group_id}](http://variphy-talentlms.netlify.app/getGroupById/{group_id})

### 9. **Get Categories**
- **Endpoint**: `/getCategories`
- **File**: `getCategories.js`
- **Description**: Fetches a list of categories in the LMS platform.
- **Usage**:
   - Make a GET request to `/getCategories`.
   - Example: Visit [http://localhost:8888/getCategories](http://localhost:8888/getCategories) for local testing or use the live domain: [http://variphy-talentlms.netlify.app/getCategories](http://variphy-talentlms.netlify.app/getCategories)

### 10. **Get Category by ID**
- **Endpoint**: `/getCategoryById`
- **File**: `getCategoryById.js`
- **Description**: Fetches a specific category by its ID.
- **Usage**:
   - Make a GET request to `/getCategoryById/{category_id}`.
   - Example: Visit [http://localhost:8888/getCategoryById/{category_id}](http://localhost:8888/getCategoryById/{category_id}) for local testing or use the live domain: [http://variphy-talentlms.netlify.app/getCategoryById/{category_id}](http://variphy-talentlms.netlify.app/getCategoryById/{category_id})

### 11. **Get Branches**
- **Endpoint**: `/getBranches`
- **File**: `getBranches.js`
- **Description**: Fetches a list of all branches in the LMS platform.
- **Usage**:
   - Make a GET request to `/getBranches`.
   - Example: Visit [http://localhost:8888/getBranches](http://localhost:8888/getBranches) for local testing or use the live domain: [http://variphy-talentlms.netlify.app/getBranches](http://variphy-talentlms.netlify.app/getBranches)

### 12. **Get Branch by ID**
- **Endpoint**: `/getBranchById`
- **File**: `getBranchById.js`
- **Description**: Fetches a specific branch by its ID.
- **Usage**:
   - Make a GET request to `/getBranchById/{branch_id}`.
   - Example: Visit [http://localhost:8888/getBranchById/{branch_id}](http://localhost:8888/getBranchById/{branch_id}) for local testing or use the live domain: [http://variphy-talentlms.netlify.app/getBranchById/{branch_id}](http://variphy-talentlms.netlify.app/getBranchById/{branch_id})

## Deployment to Netlify

1. **Link your repository to Netlify:**
   - Go to [Netlify](https://www.netlify.com/), sign in or sign up, and create a new site from GitHub.
   - Select the repository for this project.

2. **Configure Build Settings:**
   - Build Command: `npm run build`
   - Publish Directory: `dist/`

3. **Deploy your site.**

Once deployed, Netlify will give you a live URL where you can access your project, just like the one provided above.

## Notes
- Be sure to keep your environment variables secure, especially the `API_KEY`.
- If any API endpoints change or if new ones are added, you will need to update the code accordingly.

---

Happy coding! 🚀
