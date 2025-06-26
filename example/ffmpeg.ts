import * as dotenv from 'dotenv';
import path from 'path';
import { convertAudio, mergeVideoAndAudio, burnASSSubtitleToVideo, joinVideos, setGlobalConfig, uploadFile, mergeWithDelayAndStretch, createKenBurnsVideoFromImages, generateAssSubtitleForSong, mergeWithNarrationAudios } from '../src';

dotenv.config({
  path: ['.env.local', '.env'],
});

setGlobalConfig('jwt', {
  appId: process.env.JWT_APP_IE,
  userId: 'coze-plugin-utils',
  keyid: process.env.JWT_KEY,
  privateKey: process.env.JWT_SECRET?.replace(/\\n/g, '\n'),
});

setGlobalConfig('workflows', {
  fileUploader: '7507641509622562835',
});

async function main(): Promise<void> {
  // 示例1: 音频转换
  // const url = 'https://bot.hupox.com/resource/ol6sc4mylf/09e99b75f61f4dfb83893560d6d7d2c8.wav';
  // const output = await convertAudio(url, 'mp3', 'wav');
  // const res = await uploadFile(output);
  // console.log(res);

  // 示例2: 合并视频和音频
  // const audio = 'https://lf-bot-studio-plugin-resource.coze.cn/obj/bot-studio-platform-plugin-tos/artist/image/d697a53afe594a3f98f77d885625144b.wav';
  // const video = 'https://lf9-bot-platform-tos-sign.coze.cn/bot-studio-bot-platform/bot_files/117023652459296/video/mp4/7518402415159771170/output.mp4?lk3s=50ccb0c5&x-expires=1751119497&x-signature=otcBtG8NTW6%2BGJfVsZcDdcHAj34%3D';
  // const output1 = await mergeVideoAndAudio(video, audio);
  // const res1 = await uploadFile(output1);
  // console.log(res1);
  
  // 示例4: 合并多个视频
  // 使用本地资源文件进行测试
  // const videoUrls = [
  //     "https://lf6-bot-platform-tos-sign.coze.cn/bot-studio-bot-platform/bot_files/578803847402115/video/mp4/7517292809146073100/output.mp4?lk3s=50ccb0c5&x-expires=1750861073&x-signature=gXDnFCLhWmeQnt4bSEk6xyr2YMU%3D",
  //     "https://lf6-bot-platform-tos-sign.coze.cn/bot-studio-bot-platform/bot_files/578803847402115/video/mp4/7517292809146073100/output.mp4?lk3s=50ccb0c5&x-expires=1750861073&x-signature=gXDnFCLhWmeQnt4bSEk6xyr2YMU%3D",
  //   ];
  
  // console.log('开始合并视频...');
  // try {
  //   const outputPath = await joinVideos(videoUrls);
  //   console.log('视频合并完成，输出路径:', outputPath);
    
  //   // 上传合并后的视频
  //   const uploadResult = await uploadFile(outputPath);
  //   console.log('视频上传完成，URL:', uploadResult.url);
  // } catch (error) {
  //   console.error('视频合并失败:', error);
  // }

  // const config = {
  //   "audioDelayMs": 0,
  //   "audio_duration": 139,
  //   "audio_url": "https://lf-bot-studio-plugin-resource.coze.cn/obj/bot-studio-platform-plugin-tos/artist/image/553a236e5d634947a591eb842fc63d71.wav",
  //   "video_duration": 139,
  //   "video_url": "https://lf3-bot-platform-tos-sign.coze.cn/bot-studio-bot-platform/bot_files/578803847402115/video/mp4/7520037956917477415/output.mp4?lk3s=50ccb0c5&x-expires=1751500870&x-signature=bfNXBbuhqzRTh%2FvPyswPZ2bmHmY%3D"
  // };

  // const output1 = await mergeWithDelayAndStretch(config.video_url, config.audio_url, config.video_duration, config.audio_duration);

  // const res1 = await uploadFile(output1);
  // console.log(res1);

  // 示例5: Ken Burns 效果视频生成（带字幕）
  // 使用本地测试图片生成带有 Ken Burns 效果和字幕的视频
  // console.log('开始生成 Ken Burns 效果视频（带字幕）...');
  // try {
  //   const kenBurnsOutput = await createKenBurnsVideoFromImages({
  //     scenes: [
  //       {
  //         url: `https://bot.hupox.com/resource/yc6u6d86z0/2103cbddd4514748934a6db6e7b99ad0.jpeg.jpg`,
  //         audio: 'https://bot.hupox.com/resource/l6083trqxi/de292ce5495d4519bbf30696b2e1adec.mp3.mpga',
  //         audioDelay: 0.5, // 音频延迟0.5秒播放
  //         duration: 9, // 每张图片显示3秒
  //         subtitle: '第一个场景：美丽的风景',
  //         subtitlePosition: 'bottom',
  //         subtitleDelay: 0.5, // 延迟0.5秒显示字幕
  //         subtitleFontSize: 48, // 字体大小48
  //       },
  //       {
  //         url: `https://bot.hupox.com/resource/gny5nsft0j/7044a14fa85348d192375bbad147f05f.jpeg.jpg`,
  //         audio: 'https://bot.hupox.com/resource/l6083trqxi/de292ce5495d4519bbf30696b2e1adec.mp3.mpga',
  //         audioDelay: 1.0, // 音频延迟1.0秒播放
  //         duration: 10, // 第二张图片显示4秒
  //         subtitle: '第二个场景：城市夜景',
  //         subtitlePosition: 'middle',
  //         subtitleDelay: 1.0, // 延迟1秒显示字幕
  //         subtitleFontSize: 64, // 字体大小64
  //       },
  //       {
  //         url: `https://bot.hupox.com/resource/arcxdht3wn/82fc53d1cf994db89323810749d5055e.jpeg.jpg`,
  //         audio: 'https://bot.hupox.com/resource/l6083trqxi/de292ce5495d4519bbf30696b2e1adec.mp3.mpga',
  //         audioDelay: 0.3, // 音频延迟0.3秒播放
  //         duration: 12, // 第三张图片显示3秒
  //         subtitle: '第三个场景：自然风光',
  //         subtitlePosition: 'top',
  //         subtitleDelay: 0, // 立即显示字幕
  //         subtitleFontSize: 56, // 字体大小56
  //       },
  //     ],
  //     // resolution: '1920x1080', // 高清分辨率
  //     // fadeDuration: .3, // 1.5秒的淡入淡出效果
  //     // fps: 30, // 30帧每秒
  //   });
    
  //   console.log('Ken Burns 视频生成完成，输出路径:', kenBurnsOutput);
    
  //   // 上传生成的视频
  //   const kenBurnsUploadResult = await uploadFile(kenBurnsOutput);
  //   console.log('Ken Burns 视频上传完成，URL:', kenBurnsUploadResult.url);
  // } catch (error) {
  //   console.error('Ken Burns 视频生成失败:', error);
  // }

  // const data = {
  //   "scenes": [
  //     {
  //       "url": "https://s.coze.cn/t/jUbTlS7ZSrs/",
  //       "duration": 8.004
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/TdTHnM6pmU8/",
  //       "duration": 8.004
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/On7Uwtscm4E/",
  //       "duration": 4.002
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/odyXuEViHPo/",
  //       "duration": 1.959
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/izTZGHFdKPA/",
  //       "duration": 2
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/nA0d87sKmZM/",
  //       "duration": 1.92
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/FkK_HoEZc0E/",
  //       "duration": 1.96
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/MCyP278rUTI/",
  //       "duration": 2
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/8Pr3XBDkKF0/",
  //       "duration": 1.92
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/ZaZtgOPe8ec/",
  //       "duration": 2
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/MoutbbfqdLk/",
  //       "duration": 1.92
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/SdEH46a8Tek/",
  //       "duration": 2
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/dXBdUzYip0I/",
  //       "duration": 1.92
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/3bYnwHU6--E/",
  //       "duration": 1.48
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/iz6hT0hRC5Y/",
  //       "duration": 1.351
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/fMVgWbd77kk/",
  //       "duration": 1.74
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/0wo-i6Isq7w/",
  //       "duration": 1.829
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/iaFVUaNWWvc/",
  //       "duration": 1.76
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/HzRUj7kjd60/",
  //       "duration": 1.92
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/foNDyAcVdJE/",
  //       "duration": 3.72
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/xDNVGwKVbZg/",
  //       "duration": 1.96
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/riLQhVfYuOM/",
  //       "duration": 1.96
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/UXNmb7frSmk/",
  //       "duration": 2.52
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/k4msnNpmGqA/",
  //       "duration": 1.4
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/ndaH-C8TKME/",
  //       "duration": 1.76
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/JNcP7qgiHpw/",
  //       "duration": 2.2
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/oBFhatxECaI/",
  //       "duration": 3.92
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/dAuzwy52CcE/",
  //       "duration": 2
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/Lxwv1Ghu-mc/",
  //       "duration": 1.96
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/P7P8Evo_-QM/",
  //       "duration": 1.96
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/-qd1me98H14/",
  //       "duration": 2.96
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/jw2b1i6JodE/",
  //       "duration": 7.38
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/LNdNPdfuHkM/",
  //       "duration": 7.88
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/tz6_ZZY1Teg/",
  //       "duration": 6.18
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/QkGhDIbXJBI/",
  //       "duration": 6.08
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/vZknL3lIU8M/",
  //       "duration": 6.92
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/QbwcBQeZuHM/",
  //       "duration": 3.64
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/0mLS6SfeGGE/",
  //       "duration": 3.7
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/ED3O4Dw2n_4/",
  //       "duration": 4.46
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/hfwreee1468/",
  //       "duration": 1.96
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/VcemiNcYPY8/",
  //       "duration": 6.38
  //     },
  //     {
  //       "url": "https://s.coze.cn/t/KKCRHcCthXA/",
  //       "duration": 6.411
  //     }
  //   ],
  //   "subtitles": "{\"author\":\"佚名\",\"title\":\"木兰诗\",\"sentences\":[{\"words\":[{\"attribute\":{},\"end_time\":20240,\"start_time\":20010,\"text\":\"唧\"},{\"attribute\":{},\"end_time\":20469,\"start_time\":20240,\"text\":\"唧\"},{\"attribute\":{},\"end_time\":20869,\"start_time\":20490,\"text\":\"复\"},{\"attribute\":{},\"end_time\":21220,\"start_time\":21010,\"text\":\"唧\"},{\"attribute\":{},\"end_time\":21429,\"start_time\":21220,\"text\":\"唧\"},{\"attribute\":{},\"end_time\":21969,\"start_time\":21429,\"text\":\"\"}],\"text\":\"唧唧复唧唧\",\"startTime\":20010,\"endTime\":21969,\"translation\":\"Chirping and chirping again.\"},{\"words\":[{\"attribute\":{},\"end_time\":22280,\"start_time\":21970,\"text\":\"木\"},{\"attribute\":{},\"end_time\":22520,\"start_time\":22280,\"text\":\"兰\"},{\"attribute\":{},\"end_time\":22760,\"start_time\":22520,\"text\":\"当\"},{\"attribute\":{},\"end_time\":23020,\"start_time\":22760,\"text\":\"户\"},{\"attribute\":{},\"end_time\":23349,\"start_time\":23020,\"text\":\"织\"},{\"attribute\":{},\"end_time\":23969,\"start_time\":23349,\"text\":\"\"}],\"text\":\"木兰当户织\",\"startTime\":21970,\"endTime\":23969,\"translation\":\"Mulan is weaving at the door.\"},{\"words\":[{\"attribute\":{},\"end_time\":24280,\"start_time\":23970,\"text\":\"不\"},{\"attribute\":{},\"end_time\":24560,\"start_time\":24280,\"text\":\"闻\"},{\"attribute\":{},\"end_time\":24909,\"start_time\":24560,\"text\":\"机\"},{\"attribute\":{},\"end_time\":25349,\"start_time\":24970,\"text\":\"杼\"},{\"attribute\":{},\"end_time\":25869,\"start_time\":25490,\"text\":\"声\"},{\"attribute\":{},\"end_time\":25889,\"start_time\":25869,\"text\":\"\"}],\"text\":\"不闻机杼声\",\"startTime\":23970,\"endTime\":25889,\"translation\":\"The sound of the loom is not heard.\"},{\"words\":[{\"attribute\":{},\"end_time\":26220,\"start_time\":25890,\"text\":\"唯\"},{\"attribute\":{},\"end_time\":26480,\"start_time\":26220,\"text\":\"闻\"},{\"attribute\":{},\"end_time\":26720,\"start_time\":26480,\"text\":\"女\"},{\"attribute\":{},\"end_time\":26860,\"start_time\":26720,\"text\":\"叹\"},{\"attribute\":{},\"end_time\":27069,\"start_time\":26860,\"text\":\"息\"},{\"attribute\":{},\"end_time\":27849,\"start_time\":27069,\"text\":\"\"}],\"text\":\"唯闻女叹息\",\"startTime\":25890,\"endTime\":27849,\"translation\":\"Only the girl's sighs are heard.\"},{\"words\":[{\"attribute\":{},\"end_time\":28160,\"start_time\":27850,\"text\":\"问\"},{\"attribute\":{},\"end_time\":28420,\"start_time\":28160,\"text\":\"女\"},{\"attribute\":{},\"end_time\":28680,\"start_time\":28420,\"text\":\"何\"},{\"attribute\":{},\"end_time\":28980,\"start_time\":28680,\"text\":\"所\"},{\"attribute\":{},\"end_time\":29349,\"start_time\":28980,\"text\":\"思\"},{\"attribute\":{},\"end_time\":29849,\"start_time\":29349,\"text\":\"\"}],\"text\":\"问女何所思\",\"startTime\":27850,\"endTime\":29849,\"translation\":\"What are you thinking about, girl?\"},{\"words\":[{\"attribute\":{},\"end_time\":30160,\"start_time\":29850,\"text\":\"问\"},{\"attribute\":{},\"end_time\":30400,\"start_time\":30160,\"text\":\"女\"},{\"attribute\":{},\"end_time\":30640,\"start_time\":30400,\"text\":\"何\"},{\"attribute\":{},\"end_time\":30900,\"start_time\":30640,\"text\":\"所\"},{\"attribute\":{},\"end_time\":31229,\"start_time\":30900,\"text\":\"忆\"},{\"attribute\":{},\"end_time\":31769,\"start_time\":31229,\"text\":\"\"}],\"text\":\"问女何所忆\",\"startTime\":29850,\"endTime\":31769,\"translation\":\"What are you recalling, girl?\"},{\"words\":[{\"attribute\":{},\"end_time\":32100,\"start_time\":31770,\"text\":\"女\"},{\"attribute\":{},\"end_time\":32360,\"start_time\":32100,\"text\":\"亦\"},{\"attribute\":{},\"end_time\":32600,\"start_time\":32360,\"text\":\"无\"},{\"attribute\":{},\"end_time\":32880,\"start_time\":32600,\"text\":\"所\"},{\"attribute\":{},\"end_time\":33229,\"start_time\":32880,\"text\":\"思\"},{\"attribute\":{},\"end_time\":33769,\"start_time\":33229,\"text\":\"\"}],\"text\":\"女亦无所思\",\"startTime\":31770,\"endTime\":33769,\"translation\":\"The girl has nothing to think about.\"},{\"words\":[{\"attribute\":{},\"end_time\":34080,\"start_time\":33770,\"text\":\"女\"},{\"attribute\":{},\"end_time\":34320,\"start_time\":34080,\"text\":\"亦\"},{\"attribute\":{},\"end_time\":34560,\"start_time\":34320,\"text\":\"无\"},{\"attribute\":{},\"end_time\":34840,\"start_time\":34560,\"text\":\"所\"},{\"attribute\":{},\"end_time\":35189,\"start_time\":34840,\"text\":\"忆\"},{\"attribute\":{},\"end_time\":35689,\"start_time\":35189,\"text\":\"\"}],\"text\":\"女亦无所忆\",\"startTime\":33770,\"endTime\":35689,\"translation\":\"The girl has nothing to recall.\"},{\"words\":[{\"attribute\":{},\"end_time\":36020,\"start_time\":35690,\"text\":\"昨\"},{\"attribute\":{},\"end_time\":36280,\"start_time\":36020,\"text\":\"夜\"},{\"attribute\":{},\"end_time\":36520,\"start_time\":36280,\"text\":\"见\"},{\"attribute\":{},\"end_time\":36780,\"start_time\":36520,\"text\":\"军\"},{\"attribute\":{},\"end_time\":37109,\"start_time\":36780,\"text\":\"帖\"},{\"attribute\":{},\"end_time\":37689,\"start_time\":37109,\"text\":\"\"}],\"text\":\"昨夜见军帖\",\"startTime\":35690,\"endTime\":37689,\"translation\":\"Last night I saw the conscription notice.\"},{\"words\":[{\"attribute\":{},\"end_time\":38000,\"start_time\":37690,\"text\":\"可\"},{\"attribute\":{},\"end_time\":38240,\"start_time\":38000,\"text\":\"汗\"},{\"attribute\":{},\"end_time\":38480,\"start_time\":38240,\"text\":\"大\"},{\"attribute\":{},\"end_time\":38720,\"start_time\":38480,\"text\":\"点\"},{\"attribute\":{},\"end_time\":39029,\"start_time\":38720,\"text\":\"兵\"},{\"attribute\":{},\"end_time\":39609,\"start_time\":39029,\"text\":\"\"}],\"text\":\"可汗大点兵\",\"startTime\":37690,\"endTime\":39609,\"translation\":\"The Khan is mustering a large army.\"},{\"words\":[{\"attribute\":{},\"end_time\":39940,\"start_time\":39610,\"text\":\"军\"},{\"attribute\":{},\"end_time\":40200,\"start_time\":39940,\"text\":\"书\"},{\"attribute\":{},\"end_time\":40440,\"start_time\":40200,\"text\":\"十\"},{\"attribute\":{},\"end_time\":40700,\"start_time\":40440,\"text\":\"二\"},{\"attribute\":{},\"end_time\":41029,\"start_time\":40700,\"text\":\"卷\"},{\"attribute\":{},\"end_time\":41089,\"start_time\":41029,\"text\":\"\"}],\"text\":\"军书十二卷\",\"startTime\":39610,\"endTime\":41089,\"translation\":\"There are twelve volumes of military orders.\"},{\"words\":[{\"attribute\":{},\"end_time\":41420,\"start_time\":41090,\"text\":\"卷\"},{\"attribute\":{},\"end_time\":41680,\"start_time\":41420,\"text\":\"卷\"},{\"attribute\":{},\"end_time\":41920,\"start_time\":41680,\"text\":\"有\"},{\"attribute\":{},\"end_time\":42180,\"start_time\":41920,\"text\":\"爷\"},{\"attribute\":{},\"end_time\":42440,\"start_time\":42180,\"text\":\"名\"},{\"attribute\":{},\"end_time\":42440,\"start_time\":42440,\"text\":\"\"}],\"text\":\"卷卷有爷名\",\"startTime\":41090,\"endTime\":42440,\"translation\":\"Each volume bears my father's name.\"},{\"words\":[{\"attribute\":{},\"end_time\":42680,\"start_time\":42440,\"text\":\"阿\"},{\"attribute\":{},\"end_time\":42989,\"start_time\":42680,\"text\":\"爷\"},{\"attribute\":{},\"end_time\":43920,\"start_time\":43610,\"text\":\"无\"},{\"attribute\":{},\"end_time\":44060,\"start_time\":43920,\"text\":\"大\"},{\"attribute\":{},\"end_time\":44180,\"start_time\":44060,\"text\":\"儿\"},{\"attribute\":{},\"end_time\":44180,\"start_time\":44180,\"text\":\"\"}],\"text\":\"阿爷无大儿\",\"startTime\":42440,\"endTime\":44180,\"translation\":\"My father has no grown - up son.\"},{\"words\":[{\"attribute\":{},\"end_time\":44400,\"start_time\":44180,\"text\":\"木\"},{\"attribute\":{},\"end_time\":44640,\"start_time\":44400,\"text\":\"兰\"},{\"attribute\":{},\"end_time\":44880,\"start_time\":44640,\"text\":\"无\"},{\"attribute\":{},\"end_time\":45160,\"start_time\":44880,\"text\":\"长\"},{\"attribute\":{},\"end_time\":45509,\"start_time\":45160,\"text\":\"兄\"},{\"attribute\":{},\"end_time\":46009,\"start_time\":45509,\"text\":\"\"}],\"text\":\"木兰无长兄\",\"startTime\":44180,\"endTime\":46009,\"translation\":\"Mulan has no elder brother.\"},{\"words\":[{\"attribute\":{},\"end_time\":46320,\"start_time\":46010,\"text\":\"愿\"},{\"attribute\":{},\"end_time\":46600,\"start_time\":46320,\"text\":\"为\"},{\"attribute\":{},\"end_time\":46880,\"start_time\":46600,\"text\":\"市\"},{\"attribute\":{},\"end_time\":47120,\"start_time\":46880,\"text\":\"鞍\"},{\"attribute\":{},\"end_time\":47429,\"start_time\":47120,\"text\":\"马\"},{\"attribute\":{},\"end_time\":47769,\"start_time\":47429,\"text\":\"\"}],\"text\":\"愿为市鞍马\",\"startTime\":46010,\"endTime\":47769,\"translation\":\"I am willing to buy a saddle and a horse.\"},{\"words\":[{\"attribute\":{},\"end_time\":47980,\"start_time\":47770,\"text\":\"从\"},{\"attribute\":{},\"end_time\":48189,\"start_time\":47980,\"text\":\"此\"},{\"attribute\":{},\"end_time\":48640,\"start_time\":48330,\"text\":\"替\"},{\"attribute\":{},\"end_time\":48920,\"start_time\":48640,\"text\":\"爷\"},{\"attribute\":{},\"end_time\":49269,\"start_time\":48920,\"text\":\"征\"},{\"attribute\":{},\"end_time\":49689,\"start_time\":49269,\"text\":\"\"}],\"text\":\"从此替爷征\",\"startTime\":47770,\"endTime\":49689,\"translation\":\"From now on, I'll take my father's place to go to war.\"},{\"words\":[{\"attribute\":{},\"end_time\":51780,\"start_time\":51450,\"text\":\"东\"},{\"attribute\":{},\"end_time\":52040,\"start_time\":51780,\"text\":\"市\"},{\"attribute\":{},\"end_time\":52300,\"start_time\":52040,\"text\":\"买\"},{\"attribute\":{},\"end_time\":52560,\"start_time\":52300,\"text\":\"骏\"},{\"attribute\":{},\"end_time\":52869,\"start_time\":52560,\"text\":\"马\"},{\"attribute\":{},\"end_time\":53409,\"start_time\":52869,\"text\":\"\"}],\"text\":\"东市买骏马\",\"startTime\":51450,\"endTime\":53409,\"translation\":\"I buy a fine horse in the eastern market.\"},{\"words\":[{\"attribute\":{},\"end_time\":53740,\"start_time\":53410,\"text\":\"西\"},{\"attribute\":{},\"end_time\":53980,\"start_time\":53740,\"text\":\"市\"},{\"attribute\":{},\"end_time\":54200,\"start_time\":53980,\"text\":\"买\"},{\"attribute\":{},\"end_time\":54340,\"start_time\":54200,\"text\":\"鞍\"},{\"attribute\":{},\"end_time\":54549,\"start_time\":54340,\"text\":\"鞯\"},{\"attribute\":{},\"end_time\":55369,\"start_time\":54549,\"text\":\"\"}],\"text\":\"西市买鞍鞯\",\"startTime\":53410,\"endTime\":55369,\"translation\":\"I buy a saddle pad in the western market.\"},{\"words\":[{\"attribute\":{},\"end_time\":55700,\"start_time\":55370,\"text\":\"南\"},{\"attribute\":{},\"end_time\":55960,\"start_time\":55700,\"text\":\"市\"},{\"attribute\":{},\"end_time\":56220,\"start_time\":55960,\"text\":\"买\"},{\"attribute\":{},\"end_time\":56500,\"start_time\":56220,\"text\":\"辔\"},{\"attribute\":{},\"end_time\":56829,\"start_time\":56500,\"text\":\"头\"},{\"attribute\":{},\"end_time\":57329,\"start_time\":56829,\"text\":\"\"}],\"text\":\"南市买辔头\",\"startTime\":55370,\"endTime\":57329,\"translation\":\"I buy a bridle in the southern market.\"},{\"words\":[{\"attribute\":{},\"end_time\":57680,\"start_time\":57330,\"text\":\"北\"},{\"attribute\":{},\"end_time\":57940,\"start_time\":57680,\"text\":\"市\"},{\"attribute\":{},\"end_time\":58160,\"start_time\":57940,\"text\":\"买\"},{\"attribute\":{},\"end_time\":58420,\"start_time\":58160,\"text\":\"长\"},{\"attribute\":{},\"end_time\":58749,\"start_time\":58420,\"text\":\"鞭\"},{\"attribute\":{},\"end_time\":59849,\"start_time\":58749,\"text\":\"\"}],\"text\":\"北市买长鞭\",\"startTime\":57330,\"endTime\":59849,\"translation\":\"I buy a long whip in the northern market.\"},{\"words\":[{\"attribute\":{},\"end_time\":60060,\"start_time\":59850,\"text\":\"旦\"},{\"attribute\":{},\"end_time\":60100,\"start_time\":60060,\"text\":\"辞\"},{\"attribute\":{},\"end_time\":60180,\"start_time\":60100,\"text\":\"爷\"},{\"attribute\":{},\"end_time\":60380,\"start_time\":60180,\"text\":\"娘\"},{\"attribute\":{},\"end_time\":60709,\"start_time\":60380,\"text\":\"去\"},{\"attribute\":{},\"end_time\":61249,\"start_time\":60709,\"text\":\"\"}],\"text\":\"旦辞爷娘去\",\"startTime\":59850,\"endTime\":61249,\"translation\":\"In the morning, I bid farewell to my father and mother and leave.\"},{\"words\":[{\"attribute\":{},\"end_time\":61580,\"start_time\":61250,\"text\":\"暮\"},{\"attribute\":{},\"end_time\":61840,\"start_time\":61580,\"text\":\"宿\"},{\"attribute\":{},\"end_time\":62100,\"start_time\":61840,\"text\":\"黄\"},{\"attribute\":{},\"end_time\":62260,\"start_time\":62100,\"text\":\"河\"},{\"attribute\":{},\"end_time\":62469,\"start_time\":62260,\"text\":\"边\"},{\"attribute\":{},\"end_time\":63009,\"start_time\":62469,\"text\":\"\"}],\"text\":\"暮宿黄河边\",\"startTime\":61250,\"endTime\":63009,\"translation\":\"In the evening, I camp by the Yellow River.\"},{\"words\":[{\"attribute\":{},\"end_time\":63320,\"start_time\":63010,\"text\":\"不\"},{\"attribute\":{},\"end_time\":63560,\"start_time\":63320,\"text\":\"闻\"},{\"attribute\":{},\"end_time\":63800,\"start_time\":63560,\"text\":\"爷\"},{\"attribute\":{},\"end_time\":64060,\"start_time\":63800,\"text\":\"娘\"},{\"attribute\":{},\"end_time\":64340,\"start_time\":64060,\"text\":\"唤\"},{\"attribute\":{},\"end_time\":64600,\"start_time\":64340,\"text\":\"女\"},{\"attribute\":{},\"end_time\":64909,\"start_time\":64600,\"text\":\"声\"},{\"attribute\":{},\"end_time\":65209,\"start_time\":64909,\"text\":\"\"}],\"text\":\"不闻爷娘唤女声\",\"startTime\":63010,\"endTime\":65209,\"translation\":\"I don't hear my father and mother calling my name.\"},{\"words\":[{\"attribute\":{},\"end_time\":65520,\"start_time\":65210,\"text\":\"但\"},{\"attribute\":{},\"end_time\":65760,\"start_time\":65520,\"text\":\"闻\"},{\"attribute\":{},\"end_time\":66020,\"start_time\":65760,\"text\":\"黄\"},{\"attribute\":{},\"end_time\":66260,\"start_time\":66020,\"text\":\"河\"},{\"attribute\":{},\"end_time\":66500,\"start_time\":66260,\"text\":\"流\"},{\"attribute\":{},\"end_time\":66829,\"start_time\":66500,\"text\":\"水\"},{\"attribute\":{},\"end_time\":67629,\"start_time\":67250,\"text\":\"鸣\"},{\"attribute\":{},\"end_time\":67900,\"start_time\":67690,\"text\":\"溅\"},{\"attribute\":{},\"end_time\":68109,\"start_time\":67900,\"text\":\"溅\"},{\"attribute\":{},\"end_time\":69129,\"start_time\":68109,\"text\":\"\"}],\"text\":\"但闻黄河流水鸣溅溅\",\"startTime\":65210,\"endTime\":69129,\"translation\":\"Only the gurgling sound of the Yellow River water is heard.\"},{\"words\":[{\"attribute\":{},\"end_time\":69460,\"start_time\":69130,\"text\":\"旦\"},{\"attribute\":{},\"end_time\":69720,\"start_time\":69460,\"text\":\"辞\"},{\"attribute\":{},\"end_time\":69960,\"start_time\":69720,\"text\":\"黄\"},{\"attribute\":{},\"end_time\":70220,\"start_time\":69960,\"text\":\"河\"},{\"attribute\":{},\"end_time\":70549,\"start_time\":70220,\"text\":\"去\"},{\"attribute\":{},\"end_time\":71129,\"start_time\":70549,\"text\":\"\"}],\"text\":\"旦辞黄河去\",\"startTime\":69130,\"endTime\":71129,\"translation\":\"In the morning, I leave the Yellow River.\"},{\"words\":[{\"attribute\":{},\"end_time\":71460,\"start_time\":71130,\"text\":\"暮\"},{\"attribute\":{},\"end_time\":71700,\"start_time\":71460,\"text\":\"至\"},{\"attribute\":{},\"end_time\":71920,\"start_time\":71700,\"text\":\"黑\"},{\"attribute\":{},\"end_time\":72180,\"start_time\":71920,\"text\":\"山\"},{\"attribute\":{},\"end_time\":72509,\"start_time\":72180,\"text\":\"头\"},{\"attribute\":{},\"end_time\":73089,\"start_time\":72509,\"text\":\"\"}],\"text\":\"暮至黑山头\",\"startTime\":71130,\"endTime\":73089,\"translation\":\"In the evening, I reach the Black Hill.\"},{\"words\":[{\"attribute\":{},\"end_time\":73400,\"start_time\":73090,\"text\":\"不\"},{\"attribute\":{},\"end_time\":73640,\"start_time\":73400,\"text\":\"闻\"},{\"attribute\":{},\"end_time\":73860,\"start_time\":73640,\"text\":\"爷\"},{\"attribute\":{},\"end_time\":74100,\"start_time\":73860,\"text\":\"娘\"},{\"attribute\":{},\"end_time\":74380,\"start_time\":74100,\"text\":\"唤\"},{\"attribute\":{},\"end_time\":74640,\"start_time\":74380,\"text\":\"女\"},{\"attribute\":{},\"end_time\":74949,\"start_time\":74640,\"text\":\"声\"},{\"attribute\":{},\"end_time\":75049,\"start_time\":74949,\"text\":\"\"}],\"text\":\"不闻爷娘唤女声\",\"startTime\":73090,\"endTime\":75049,\"translation\":\"I don't hear my father and mother calling my name.\"},{\"words\":[{\"attribute\":{},\"end_time\":75360,\"start_time\":75050,\"text\":\"但\"},{\"attribute\":{},\"end_time\":75620,\"start_time\":75360,\"text\":\"闻\"},{\"attribute\":{},\"end_time\":75880,\"start_time\":75620,\"text\":\"燕\"},{\"attribute\":{},\"end_time\":76120,\"start_time\":75880,\"text\":\"山\"},{\"attribute\":{},\"end_time\":76380,\"start_time\":76120,\"text\":\"胡\"},{\"attribute\":{},\"end_time\":76709,\"start_time\":76380,\"text\":\"骑\"},{\"attribute\":{},\"end_time\":77469,\"start_time\":77090,\"text\":\"鸣\"},{\"attribute\":{},\"end_time\":77780,\"start_time\":77570,\"text\":\"啾\"},{\"attribute\":{},\"end_time\":77989,\"start_time\":77780,\"text\":\"啾\"},{\"attribute\":{},\"end_time\":78009,\"start_time\":77989,\"text\":\"\"}],\"text\":\"但闻燕山胡骑鸣啾啾\",\"startTime\":75050,\"endTime\":78009,\"translation\":\"Only the neighing of the Tartar horses on the Yanshan Mountain is heard.\"},{\"words\":[{\"attribute\":{},\"end_time\":79280,\"start_time\":79050,\"text\":\"巾\"},{\"attribute\":{},\"end_time\":79509,\"start_time\":79280,\"text\":\"帼\"},{\"attribute\":{},\"end_time\":81429,\"start_time\":81050,\"text\":\"豪\"},{\"attribute\":{},\"end_time\":82189,\"start_time\":81810,\"text\":\"情\"},{\"attribute\":{},\"end_time\":83389,\"start_time\":83010,\"text\":\"志\"},{\"attribute\":{},\"end_time\":85389,\"start_time\":83389,\"text\":\"\"}],\"text\":\"巾帼豪情志\",\"startTime\":79050,\"endTime\":85389,\"translation\":\"A heroic woman with lofty aspirations.\"},{\"words\":[{\"attribute\":{},\"end_time\":87229,\"start_time\":86850,\"text\":\"替\"},{\"attribute\":{},\"end_time\":87949,\"start_time\":87570,\"text\":\"父\"},{\"attribute\":{},\"end_time\":89229,\"start_time\":88850,\"text\":\"赴\"},{\"attribute\":{},\"end_time\":91060,\"start_time\":90850,\"text\":\"征\"},{\"attribute\":{},\"end_time\":91269,\"start_time\":91060,\"text\":\"程\"},{\"attribute\":{},\"end_time\":93269,\"start_time\":91269,\"text\":\"\"}],\"text\":\"替父赴征程\",\"startTime\":86850,\"endTime\":93269,\"translation\":\"Taking her father's place to start the journey to war.\"},{\"words\":[{\"attribute\":{},\"end_time\":95149,\"start_time\":94770,\"text\":\"战\"},{\"attribute\":{},\"end_time\":95949,\"start_time\":95570,\"text\":\"火\"},{\"attribute\":{},\"end_time\":96940,\"start_time\":96730,\"text\":\"硝\"},{\"attribute\":{},\"end_time\":97149,\"start_time\":96940,\"text\":\"烟\"},{\"attribute\":{},\"end_time\":99069,\"start_time\":98690,\"text\":\"漫\"},{\"attribute\":{},\"end_time\":99449,\"start_time\":99069,\"text\":\"\"}],\"text\":\"战火硝烟漫\",\"startTime\":94770,\"endTime\":99449,\"translation\":\"The war flames and smoke are everywhere.\"},{\"words\":[{\"attribute\":{},\"end_time\":99829,\"start_time\":99450,\"text\":\"木\"},{\"attribute\":{},\"end_time\":101029,\"start_time\":100650,\"text\":\"兰\"},{\"attribute\":{},\"end_time\":101789,\"start_time\":101410,\"text\":\"展\"},{\"attribute\":{},\"end_time\":104429,\"start_time\":104050,\"text\":\"英\"},{\"attribute\":{},\"end_time\":104989,\"start_time\":104610,\"text\":\"勇\"},{\"attribute\":{},\"end_time\":105529,\"start_time\":104989,\"text\":\"\"}],\"text\":\"木兰展英勇\",\"startTime\":99450,\"endTime\":105529,\"translation\":\"Mulan shows her bravery.\"},{\"words\":[{\"attribute\":{},\"end_time\":106780,\"start_time\":106570,\"text\":\"万\"},{\"attribute\":{},\"end_time\":106989,\"start_time\":106780,\"text\":\"里\"},{\"attribute\":{},\"end_time\":108949,\"start_time\":108570,\"text\":\"赴\"},{\"attribute\":{},\"end_time\":109909,\"start_time\":109530,\"text\":\"戎\"},{\"attribute\":{},\"end_time\":110869,\"start_time\":110490,\"text\":\"机\"},{\"attribute\":{},\"end_time\":112449,\"start_time\":110869,\"text\":\"\"}],\"text\":\"万里赴戎机\",\"startTime\":106570,\"endTime\":112449,\"translation\":\"She travels ten thousand miles to fight in the war.\"},{\"words\":[{\"attribute\":{},\"end_time\":112829,\"start_time\":112450,\"text\":\"关\"},{\"attribute\":{},\"end_time\":113309,\"start_time\":112930,\"text\":\"山\"},{\"attribute\":{},\"end_time\":113789,\"start_time\":113410,\"text\":\"度\"},{\"attribute\":{},\"end_time\":114349,\"start_time\":113970,\"text\":\"若\"},{\"attribute\":{},\"end_time\":114829,\"start_time\":114450,\"text\":\"飞\"},{\"attribute\":{},\"end_time\":116089,\"start_time\":114829,\"text\":\"\"}],\"text\":\"关山度若飞\",\"startTime\":112450,\"endTime\":116089,\"translation\":\"She crosses the passes and mountains like flying.\"},{\"words\":[{\"attribute\":{},\"end_time\":116440,\"start_time\":116090,\"text\":\"朔\"},{\"attribute\":{},\"end_time\":116789,\"start_time\":116440,\"text\":\"气\"},{\"attribute\":{},\"end_time\":117269,\"start_time\":116890,\"text\":\"传\"},{\"attribute\":{},\"end_time\":117580,\"start_time\":117370,\"text\":\"金\"},{\"attribute\":{},\"end_time\":117789,\"start_time\":117580,\"text\":\"柝\"},{\"attribute\":{},\"end_time\":119789,\"start_time\":117789,\"text\":\"\"}],\"text\":\"朔气传金柝\",\"startTime\":116090,\"endTime\":119789,\"translation\":\"The northern wind carries the sound of the watchman's clapper.\"},{\"words\":[{\"attribute\":{},\"end_time\":120669,\"start_time\":120290,\"text\":\"寒\"},{\"attribute\":{},\"end_time\":121229,\"start_time\":120850,\"text\":\"光\"},{\"attribute\":{},\"end_time\":121709,\"start_time\":121330,\"text\":\"照\"},{\"attribute\":{},\"end_time\":122669,\"start_time\":122290,\"text\":\"铁\"},{\"attribute\":{},\"end_time\":123709,\"start_time\":123330,\"text\":\"衣\"},{\"attribute\":{},\"end_time\":124249,\"start_time\":123709,\"text\":\"\"}],\"text\":\"寒光照铁衣\",\"startTime\":120290,\"endTime\":124249,\"translation\":\"The cold moonlight shines on the iron armor.\"},{\"words\":[{\"attribute\":{},\"end_time\":124580,\"start_time\":124250,\"text\":\"将\"},{\"attribute\":{},\"end_time\":124840,\"start_time\":124580,\"text\":\"军\"},{\"attribute\":{},\"end_time\":125100,\"start_time\":124840,\"text\":\"百\"},{\"attribute\":{},\"end_time\":125400,\"start_time\":125100,\"text\":\"战\"},{\"attribute\":{},\"end_time\":125749,\"start_time\":125400,\"text\":\"死\"},{\"attribute\":{},\"end_time\":126209,\"start_time\":125749,\"text\":\"\"}],\"text\":\"将军百战死\",\"startTime\":124250,\"endTime\":126209,\"translation\":\"Many generals die after hundreds of battles.\"},{\"words\":[{\"attribute\":{},\"end_time\":126589,\"start_time\":126210,\"text\":\"壮\"},{\"attribute\":{},\"end_time\":127109,\"start_time\":126730,\"text\":\"士\"},{\"attribute\":{},\"end_time\":128380,\"start_time\":128170,\"text\":\"十\"},{\"attribute\":{},\"end_time\":128589,\"start_time\":128380,\"text\":\"年\"},{\"attribute\":{},\"end_time\":130589,\"start_time\":130210,\"text\":\"归\"},{\"attribute\":{},\"end_time\":132589,\"start_time\":130589,\"text\":\"\"}],\"text\":\"壮士十年归\",\"startTime\":126210,\"endTime\":132589,\"translation\":\"The valiant soldiers return after ten years.\"}]}"
  // }

  // const output = await createKenBurnsVideoFromImages({
  //   scenes: data.scenes,
  //   subtitles: JSON.parse(data.subtitles),
  //   fadeDuration: 0,
  // });

  // const res1 = await uploadFile(output);
  // console.log(res1);

  // const input = {

  //   };
  
  // const output = await mergeWithNarrationAudios(
  //   input.video_duration,
  //   input.audio_duration,
  //   input.video_url,
  //   input.narrations
  // );

  // const res1 = await uploadFile(output);
  // console.log(res1);
}
 
main();