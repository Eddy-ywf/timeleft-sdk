HOW TO USE SDK

1. USER API

# IMPORT

import { AxiosResponse } from 'axios';
import UserApi from '@timeleft/sdk-typescript/src/Api/UserApi';
import MyProfileResponse from '@timeleft/sdk-typescript/src/ResponseModel/IUserProfileResponse';

// TOKEN GET FROM FIREBASE
const token: string =
'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjJmOGI1NTdjMWNkMWUxZWM2ODBjZTkyYWFmY2U0NTIxMWUxZTRiNDEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZWRkeSIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS90aW1lbGVmdC03ZmE4MyIsImF1ZCI6InRpbWVsZWZ0LTdmYTgzIiwiYXV0aF90aW1lIjoxNjA0NTg4NjA1LCJ1c2VyX2lkIjoiekNrZmZ0Z010UVV1THQwVmRYbzQ1bGY0T3dqMSIsInN1YiI6InpDa2ZmdGdNdFFVdUx0MFZkWG80NWxmNE93ajEiLCJpYXQiOjE2MDUxNjQ5MTksImV4cCI6MTYwNTE2ODUxOSwiZW1haWwiOiJlZGR5ZW5jbGF2ZUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZWRkeWVuY2xhdmVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.HL4tcfuBS4ohzFlP1u5mfph3ojOa8c5Ss07kXQQ1dqdgtXui8QbRMEvyKG7vAucq01Pl-cJMlDufUFex4AgaaZ1yAlKvSkgjm5YcyJyEF2TEuDfPZII334W5aDX7DceFELu3y407kxACQQT4voqKRxZEARJkDm2LWbIwC1wt931QDG5VE0tyvFWEOy6ev5XNZbdvOLDoHx-9oJ-lQfwyLhjHy-tQ_887LMJ2nvPhR08Y_eYC8GLrdSsOJGwGXroivqELTkTCGCDo6A76n8oz3WuRm6S-uIuilgQmn_ayuvqIPjjf4Cvw10Ahv5N_9MbvuHZdn52bNS8arWUX3zuSJA';

    const userApi = new UserApi('development', token);

## Get User Infor

    userApi.getUserProfile().then(
      (response: AxiosResponse<IVehicleListResponse>) => {
        // do something here
      }
    )

## Update User Profile

    const profileData: IUserProfileUpdateRequest = { ... };
    userApi.updateUserProfile(profileData).then(...)

2. Category API

# IMPORT

    import { AxiosResponse } from 'axios';
    import CategoryApi from '@timeleft/sdk-typescript/src/Api/CategoryApi';
    import IDreamsOfCategoryResponse from '@timeleft/sdk-typescript/src/ResponseModel/IDreamOfCategoryResponse';
    import IGetAllCategoriesResponse from '@timeleft/sdk-typescript/src/ResponseModel/IGetAllCategoriesResponse';

    const categoryApi = new CategoryApi('development');

## Get Dreams Of Category

    categoryApi.getDreamsOfCategory().then(
      (response: AxiosResponse<IDreamsOfCategoryResponse>) => {
        // do something here
      }
    )

## Get All Categories

    categoryApi.getAllCategories().then(
      (response: AxiosResponse<IGetAllCategoriesResponse>) => {
        // do something here
      }
    )

2. Dream API

# IMPORT

    import { AxiosResponse } from 'axios';
    import DreamApi from '@timeleft/sdk-typescript/src/Api/DreamApi';
    import IDreamsOfCategoryResponse from '@timeleft/sdk-typescript/src/ResponseModel/IDreamOfCategoryResponse';
