HOW TO USE SDK

# TOKEN GET FROM FIREBASE

    const token: string =
    'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjJmOGI1NTdjMWNkMWUxZWM2ODBjZTkyYWFmY2U0NTIxMWUxZTRiNDEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZWRkeSIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS90aW1lbGVmdC03ZmE4MyIsImF1ZCI6InRpbWVsZWZ0LTdmYTgzIiwiYXV0aF90aW1lIjoxNjA0NTg4NjA1LCJ1c2VyX2lkIjoiekNrZmZ0Z010UVV1THQwVmRYbzQ1bGY0T3dqMSIsInN1YiI6InpDa2ZmdGdNdFFVdUx0MFZkWG80NWxmNE93ajEiLCJpYXQiOjE2MDUxNjQ5MTksImV4cCI6MTYwNTE2ODUxOSwiZW1haWwiOiJlZGR5ZW5jbGF2ZUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZWRkeWVuY2xhdmVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.HL4tcfuBS4ohzFlP1u5mfph3ojOa8c5Ss07kXQQ1dqdgtXui8QbRMEvyKG7vAucq01Pl-cJMlDufUFex4AgaaZ1yAlKvSkgjm5YcyJyEF2TEuDfPZII334W5aDX7DceFELu3y407kxACQQT4voqKRxZEARJkDm2LWbIwC1wt931QDG5VE0tyvFWEOy6ev5XNZbdvOLDoHx-9oJ-lQfwyLhjHy-tQ_887LMJ2nvPhR08Y_eYC8GLrdSsOJGwGXroivqELTkTCGCDo6A76n8oz3WuRm6S-uIuilgQmn_ayuvqIPjjf4Cvw10Ahv5N_9MbvuHZdn52bNS8arWUX3zuSJA';

# 1. User API

## IMPORT

    import { AxiosResponse } from 'axios';
    import UserApi from '@timeleft/sdk-typescript/src/Api/UserApi';
    import IUserProfileUpdateRequest from '@timeleft/sdk-typescript/src/RequestModel/IUserProfileUpdateRequest';
    import IUserProfileResponse from '@timeleft/sdk-typescript/src/ResponseModel/IUserProfileResponse';

    const userApi = new UserApi('development', token);

## Get User Information

    userApi.getUserProfile().then(
      (response: AxiosResponse<IUserProfileResponse>) => {
        // do something here
      }
    )

## Update User Profile

    const profileData: IUserProfileUpdateRequest = { ... };
    userApi.updateUserProfile(profileData).then(
      (response: AxiosResponse<IUserProfileResponse>) => {
        // do something here
      }
    )

# 2. Category API

## IMPORT

    import { AxiosResponse } from 'axios';
    import CategoryApi from '@timeleft/sdk-typescript/src/Api/CategoryApi';
    import IDreamOfCategoryRequest from '@timeleft/sdk-typescript/src/RequestModel/IDreamOfCategoryRequest';
    import IDreamsOfCategoryResponse from '@timeleft/sdk-typescript/src/ResponseModel/IDreamOfCategoryResponse';
    import IGetAllCategoriesResponse from '@timeleft/sdk-typescript/src/ResponseModel/IGetAllCategoriesResponse';

    const categoryApi = new CategoryApi('development');

## Get Dreams Of Category

    const dreamOfCategoryData: IDreamOfCategoryRequest = { ... };
    categoryApi.getDreamsOfCategory(dreamOfCategoryData).then(
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

# 3. Dream API

## IMPORT

    import { AxiosResponse } from 'axios';
    import DreamApi from '@timeleft/sdk-typescript/src/Api/DreamApi';
    import IDreamRequest from '@timeleft/sdk-typescript/src/RequestModel/IDreamRequest';
    import IDreamResponse from '@timeleft/sdk-typescript/src/ResponseModel/IDreamResponse';
    import ILikeRequest from '@timeleft/sdk-typescript/src/RequestModel/ILikeDreamRequest';
    import ILikeResponse from '@timeleft/sdk-typescript/src/ResponseModel/ILikeDreamResponse';
    import IDislikeRequest from '@timeleft/sdk-typescript/src/RequestModel/IDislikeDreamRequest';
    import IDislikeResponse from '@timeleft/sdk-typescript/src/ResponseModel/IDislikeDreamResponse';
    import IDoneRequest from '@timeleft/sdk-typescript/src/RequestModel/IDoneDreamRequest';
    import IDoneDreamResponse from '@timeleft/sdk-typescript/src/ResponseModel/IDoneDreamResponse';
    import ILikedDreamsRequest from '@timeleft/sdk-typescript/src/RequestModel/IMyLikeDreamRequest';
    import ILikedDreamsResponse from '@timeleft/sdk-typescript/src/ResponseModel/IMyLikeDreamResponse';
    import IDoneDreamsRequest from '@timeleft/sdk-typescript/src/RequestModel/IMyDoneDreamRequest';
    import IShuffleRequest from '@timeleft/sdk-typescript/src/RequestModel/IShuffleRequest';
    import IShuffleResponse from '@timeleft/sdk-typescript/src/ResponseModel/IShuffleResponse';
    import IEasyResponse from '@timeleft/sdk-typescript/src/ResponseModel/IEasyDreamResponse';
    import IGetDreamByUidRequest from '@timeleft/sdk-typescript/src/RequestModel/IGetDreamByUidRequest';
    import IGetDreamByUidResponse from '@timeleft/sdk-typescript/src/ResponseModel/IGetDreamByUidResponse';
    import ILatestDreamsRequest from '@timeleft/sdk-typescript/src/RequestModel/IGetLatestDreamsRequest';
    import ILatestDreamsResponse from '@timeleft/sdk-typescript/src/ResponseModel/IGetLatestDreamsResponse';
    import IPopularDreamsRequest from '@timeleft/sdk-typescript/src/RequestModel/IGetPopularDreamsRequest';
    import IPopularDreamsResponse from '@timeleft/sdk-typescript/src/ResponseModel/IGetPopularDreamsResponse';

    const dreamApi = new DreamApi('development', token);

## Create Dream

    const dreamData: IDreamRequest = { ... };
    dreamApi.createDream(dreamData).then(
      (response: AxiosResponse<IDreamResponse>) => {
        // do something here
      }
    )

## Like Dream

    const likeDreamData: ILikeRequest = { ... };
    dreamApi.likeDream(likeDreamData).then(
      (response: AxiosResponse<ILikeResponse>) => {
        // do something here
      }
    )

## Dislike Dream

    const dislikeDreamData: DoneRequest = { ... };
    dreamApi.dislikeDream(dislikeDreamData).then(
      (response: AxiosResponse<IDislikeResponse>) => {
        // do something here
      }
    )

## Make Dream Done

    const makeDreamDoneData: IDoneRequest = { ... };
    dreamApi.makeDreamDone(makeDreamDoneData).then(
      (response: AxiosResponse<IDoneDreamResponse>) => {
        // do something here
      }
    )

## Get My Liked Dreams

    const myLikedDreamsData: ILikedDreamsRequest = { ... };
    dreamApi.getMyLikeDreams(myLikedDreamsData).then(
      (response: AxiosResponse<ILikedDreamsResponse>) => {
        // do something here
      }
    )

## Get My Done Dreams

    const myDoneDreamsData: IDoneDreamsRequest = { ... };
    dreamApi.getMyDoneDreams(myDoneDreamsData).then(
      (response: AxiosResponse<IDoneDreamResponse>) => {
        // do something here
      }
    )

## Get Shuffle

    const shuffleData: IShuffleRequest = { ... };
    dreamApi.getShuffle(shuffleData).then(
      (response: AxiosResponse<IEasyResponse>) => {
        // do something here
      }
    )

## Get Easy Dreams

    dreamApi.getEasyDream().then(
      (response: AxiosResponse<IEasyResponse>) => {
        // do something here
      }
    )

## Get Dream By Uid

    const dreamByUidData: IGetDreamByUidRequest = { ... };
    dreamApi.getDreamByUid(dreamByUidData).then(
      (response: AxiosResponse<IGetDreamByUidResponse>) => {
        // do something here
      }
    )

## Get Latest Dreams

    const getLatestDreamsData: ILatestDreamsRequest = { ... };
    dreamApi.getLatestDreams(getLatestDreamsData).then(
      (response: AxiosResponse<ILatestDreamsResponse>) => {
        // do something here
      }
    )

## Get Popular Dreams Of The Week

    const getPopularDreamsOfWeekData: IPopularDreamsRequest = { ... };
    dreamApi.getPopularDreamsOfWeek(getPopularDreamsOfWeekData).then(
      (response: AxiosResponse<IPopularDreamsResponse>) => {
        // do something here
      }
    )

# 4. Question API

## IMPORT

    import { AxiosResponse } from 'axios';
    import QuestionApi from '@timeleft/sdk-typescript/src/Api/QuestionApi';
    import ICreateQuestionRequest from '@timeleft/sdk-typescript/src/RequestModel/ICreateQuestionRequest';
    import ICreateQuestionResponse from '@timeleft/sdk-typescript/src/ResponseModel/ICreateQuestionResponse';
    import ICreateAnswerRequest from '@timeleft/sdk-typescript/src/RequestModel/ICreateAnswerRequest';
    import ICreateAnswerResponse from '@timeleft/sdk-typescript/src/ResponseModel/ICreateAnswerResponse';

    const questionApi = new QuestionApi('development', token);

## Create Question

    const questionData: ICreateQuestionRequest = { ... };
    questionApi.createQuestion(questionData).then(
      (response: AxiosResponse<ICreateQuestionResponse>) => {
        // do something here
      }
    )

## Create Answer

    const answerData: ICreateAnswerRequest = { ... };
    questionApi.createAnswer(questionData).then(
      (response: AxiosResponse<ICreateAnswerResponse>) => {
        // do something here
      }
    )

# 5. Feeling API

## IMPORT

    import { AxiosResponse } from 'axios';
    import FeelingApi from '@timeleft/sdk-typescript/src/Api/FeelingApi';
    import IEmojiRequest from '@timeleft/sdk-typescript/src/RequestModel/IEmojiRequest';
    import IEmojiResponse from '@timeleft/sdk-typescript/src/ResponseModel/IEmojiResponse';
    import IGetEmojisResponse from '@timeleft/sdk-typescript/src/ResponseModel/IGetEmojisResponse';
    import IAddFeelingRequest from '@timeleft/sdk-typescript/src/RequestModel/IAddFeelingRequest';
    import IGetFeelingsOfDreamResponse from '@timeleft/sdk-typescript/src/ResponseModel/IGetFeelingOfDreamResponse';
    import IGetFeelingsOfDreamRequest from '@timeleft/sdk-typescript/src/RequestModel/IGetFeelingOfDreamRequest';
    import IEmojisCountersRequest from '@timeleft/sdk-typescript/src/RequestModel/IEmojiCountersRequest';
    import IEmojisCountersResponse from '@timeleft/sdk-typescript/src/ResponseModel/IEmojiCountersResponse';

    const feelingApi = new FeelingApi('development', token);

## Create Emoji

    const emojiData: IEmojiRequest = { ... };
    feelingApi.createEmoji(emojiData).then(
      (response: AxiosResponse<IEmojiResponse>) => {
        // do something here
      }
    )

## Get All Emoji

    feelingApi.getAllEmoji().then(
      (response: AxiosResponse<IGetEmojisResponse>) => {
        // do something here
      }
    )

## Add Feeling

    const addFeelingData: IAddFeelingRequest = { ... };
    feelingApi.addFeeling(addFeelingData).then(
      (response: AxiosResponse<IGetFeelingsOfDreamResponse>) => {
        // do something here
      }
    )

## Get Feelings Of Dream

    const getFeelingsData: IGetFeelingsOfDreamRequest = { ... };
    feelingApi.getFeelingOfDream(getFeelingsData).then(
      (response: AxiosResponse<IGetFeelingsOfDreamResponse>) => {
        // do something here
      }
    )

## Get Emojis Counters

    const getEmojiCountersData: IEmojisCountersRequest = { ... };
    feelingApi.getEmojiCounters(getEmojiCountersData).then(
      (response: AxiosResponse<IEmojisCountersResponse>) => {
        // do something here
      }
    )

# 6. Interaction API

## IMPORT

    import { AxiosResponse } from 'axios';
    import InteractionApi from '@timeleft/sdk-typescript/src/Api/InteractionApi';
    import IInteractionRequest from '@timeleft/sdk-typescript/src/RequestModel/IInteractionRequest';
    import IInteractionResponse from '@timeleft/sdk-typescript/src/ResponseModel/IInteractionResponse';

    const interactionApi = new InteractionApi('development', token);

## Create Interaction

    const interactionData: IInteractionRequest = { ... };
    interactionApi.createInteraction(interactionData).then(
      (response: AxiosResponse<IInteractionResponse>) => {
        // do something here
      }
    )

# 7. Auth API

## IMPORT

    import { AxiosResponse } from 'axios';
    import AuthApi from '@timeleft/sdk-typescript/src/Api/AuthApi';
    import IChangePasswordRequest from '@timeleft/sdk-typescript/src/RequestModel/IChangePasswordRequest';
    import IChangePasswordResponse from '@timeleft/sdk-typescript/src/ResponseModel/IChangePasswordResponse';

    const authApi = new AuthApi('development', token);

## Change Password

    const changePasswordData: IChangePasswordRequest = { ... };
    authApi.changePassword(changePasswordData).then(
      (response: AxiosResponse<IChangePasswordResponse>) => {
        // do something here
      }
    )
