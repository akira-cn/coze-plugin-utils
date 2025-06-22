import * as dotenv from 'dotenv';
import path from 'path';
import { convertAudio, mergeVideoAndAudio, burnASSSubtitleToVideo, joinVideos, setGlobalConfig, uploadFile, mergeWithDelayAndStretch, createKenBurnsVideoFromImages, generateAssSubtitleForSong } from '../src';

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
  //   "audio_duration": 70,
  //   "audio_url": "https://lf-bot-studio-plugin-resource.coze.cn/obj/bot-studio-platform-plugin-tos/artist/image/b51947011b4a491bbe909661829bc38f.wav",
  //   "video_duration": 70,
  //   "video_url": "https://lf9-bot-platform-tos-sign.coze.cn/bot-studio-bot-platform/bot_files/578803847402115/video/mp4/7518697999741501449/output.mp4?lk3s=50ccb0c5&x-expires=1751188282&x-signature=g1PEQ2Hu2whxdqeLV7sgMbksCts%3D"
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

  const data = {
    "scenes": [
      {
        "url": "https://s.coze.cn/t/WhONRP8Xxok/",
        "duration": 4.674
      },
      {
        "url": "https://s.coze.cn/t/5AJQxJFZjK8/",
        "duration": 7.011
      },
      {
        "url": "https://s.coze.cn/t/vql72CotOWM/",
        "duration": 3.879
      },
      {
        "url": "https://s.coze.cn/t/KzZHHMccQCE/",
        "duration": 3.56
      },
      {
        "url": "https://s.coze.cn/t/2DBsPt7dyhA/",
        "duration": 2.24
      },
      {
        "url": "https://s.coze.cn/t/g0EUOJpDUpM/",
        "duration": 4.52
      },
      {
        "url": "https://s.coze.cn/t/GNE43fyTXIQ/",
        "duration": 5.12
      },
      {
        "url": "https://s.coze.cn/t/CrbGiVI11xc/",
        "duration": 3.84
      },
      {
        "url": "https://s.coze.cn/t/8tpp5Gd3PXk/",
        "duration": 3.92
      },
      {
        "url": "https://s.coze.cn/t/HNROpFj4toI/",
        "duration": 2.72
      },
      {
        "url": "https://s.coze.cn/t/J0JqV2lQAnU/",
        "duration": 4.96
      },
      {
        "url": "https://s.coze.cn/t/AFseQrVBum8/",
        "duration": 3.96
      },
      {
        "url": "https://s.coze.cn/t/JbYq8mmsqGQ/",
        "duration": 3.32
      },
      {
        "url": "https://s.coze.cn/t/y4WccOOqccg/",
        "duration": 3.56
      },
      {
        "url": "https://s.coze.cn/t/wEnozriO1uY/",
        "duration": 4.16
      },
      {
        "url": "https://s.coze.cn/t/0IzqRORGPto/",
        "duration": 4.4
      },
      {
        "url": "https://s.coze.cn/t/F9ybGPaYUqI/",
        "duration": 2.6
      },
      {
        "url": "https://s.coze.cn/t/ZuAuGCGo4Lo/",
        "duration": 3.84
      },
      {
        "url": "https://s.coze.cn/t/vwx2KU-FgRw/",
        "duration": 4.64
      },
      {
        "url": "https://s.coze.cn/t/FlFkHypsXFo/",
        "duration": 4.36
      },
      {
        "url": "https://s.coze.cn/t/JYEMFeCZvFk/",
        "duration": 3.88
      },
      {
        "url": "https://s.coze.cn/t/_pTB81r6cXE/",
        "duration": 3.88
      },
      {
        "url": "https://s.coze.cn/t/RfTaPLq7vhE/",
        "duration": 1.955
      }
    ],
    "subtitles": "{\"author\":\"白居易\",\"title\":\"池上\",\"sentences\":[{\"words\":[{\"attribute\":{},\"end_time\":12153,\"start_time\":11686,\"text\":\"小\"},{\"attribute\":{},\"end_time\":13113,\"start_time\":12646,\"text\":\"娃\"},{\"attribute\":{},\"end_time\":14000,\"start_time\":13606,\"text\":\"撑\"},{\"attribute\":{},\"end_time\":14393,\"start_time\":14000,\"text\":\"小\"},{\"attribute\":{},\"end_time\":15033,\"start_time\":14566,\"text\":\"艇\"},{\"attribute\":{},\"end_time\":15565,\"start_time\":15033,\"text\":\"\"}],\"text\":\"小娃撑小艇\",\"startTime\":11686,\"endTime\":15565},{\"words\":[{\"attribute\":{},\"end_time\":16033,\"start_time\":15566,\"text\":\"偷\"},{\"attribute\":{},\"end_time\":16600,\"start_time\":16246,\"text\":\"采\"},{\"attribute\":{},\"end_time\":16953,\"start_time\":16600,\"text\":\"白\"},{\"attribute\":{},\"end_time\":17433,\"start_time\":16966,\"text\":\"莲\"},{\"attribute\":{},\"end_time\":17913,\"start_time\":17446,\"text\":\"回\"},{\"attribute\":{},\"end_time\":19125,\"start_time\":17913,\"text\":\"\"}],\"text\":\"偷采白莲回\",\"startTime\":15566,\"endTime\":19125},{\"words\":[{\"attribute\":{},\"end_time\":19500,\"start_time\":19126,\"text\":\"那\"},{\"attribute\":{},\"end_time\":19800,\"start_time\":19500,\"text\":\"可\"},{\"attribute\":{},\"end_time\":20193,\"start_time\":19800,\"text\":\"爱\"},{\"attribute\":{},\"end_time\":20740,\"start_time\":20366,\"text\":\"孩\"},{\"attribute\":{},\"end_time\":21113,\"start_time\":20740,\"text\":\"童\"},{\"attribute\":{},\"end_time\":21365,\"start_time\":21113,\"text\":\"\"}],\"text\":\"那可爱孩童\",\"startTime\":19126,\"endTime\":21365},{\"words\":[{\"attribute\":{},\"end_time\":21833,\"start_time\":21366,\"text\":\"划\"},{\"attribute\":{},\"end_time\":22420,\"start_time\":22046,\"text\":\"着\"},{\"attribute\":{},\"end_time\":22793,\"start_time\":22420,\"text\":\"小\"},{\"attribute\":{},\"end_time\":23260,\"start_time\":22806,\"text\":\"船\"},{\"attribute\":{},\"end_time\":23713,\"start_time\":23260,\"text\":\"儿\"},{\"attribute\":{},\"end_time\":24673,\"start_time\":24206,\"text\":\"来\"},{\"attribute\":{},\"end_time\":25885,\"start_time\":24673,\"text\":\"\"}],\"text\":\"划着小船儿来\",\"startTime\":21366,\"endTime\":25885},{\"words\":[{\"attribute\":{},\"end_time\":27360,\"start_time\":27140,\"text\":\"天\"},{\"attribute\":{},\"end_time\":27633,\"start_time\":27360,\"text\":\"真\"},{\"attribute\":{},\"end_time\":29420,\"start_time\":29046,\"text\":\"的\"},{\"attribute\":{},\"end_time\":29580,\"start_time\":29420,\"text\":\"模\"},{\"attribute\":{},\"end_time\":29833,\"start_time\":29580,\"text\":\"样\"},{\"attribute\":{},\"end_time\":31005,\"start_time\":29833,\"text\":\"\"}],\"text\":\"天真的模样\",\"startTime\":27140,\"endTime\":31005},{\"words\":[{\"attribute\":{},\"end_time\":31473,\"start_time\":31006,\"text\":\"怀\"},{\"attribute\":{},\"end_time\":32080,\"start_time\":31726,\"text\":\"揣\"},{\"attribute\":{},\"end_time\":32433,\"start_time\":32080,\"text\":\"满\"},{\"attribute\":{},\"end_time\":32913,\"start_time\":32446,\"text\":\"心\"},{\"attribute\":{},\"end_time\":33180,\"start_time\":32926,\"text\":\"期\"},{\"attribute\":{},\"end_time\":33433,\"start_time\":33180,\"text\":\"待\"},{\"attribute\":{},\"end_time\":34845,\"start_time\":33433,\"text\":\"\"}],\"text\":\"怀揣满心期待\",\"startTime\":31006,\"endTime\":34845},{\"words\":[{\"attribute\":{},\"end_time\":35313,\"start_time\":34846,\"text\":\"白\"},{\"attribute\":{},\"end_time\":35900,\"start_time\":35526,\"text\":\"莲\"},{\"attribute\":{},\"end_time\":36273,\"start_time\":35900,\"text\":\"多\"},{\"attribute\":{},\"end_time\":36753,\"start_time\":36286,\"text\":\"娇\"},{\"attribute\":{},\"end_time\":37273,\"start_time\":36806,\"text\":\"美\"},{\"attribute\":{},\"end_time\":38765,\"start_time\":37273,\"text\":\"\"}],\"text\":\"白莲多娇美\",\"startTime\":34846,\"endTime\":38765},{\"words\":[{\"attribute\":{},\"end_time\":39233,\"start_time\":38766,\"text\":\"忍\"},{\"attribute\":{},\"end_time\":39500,\"start_time\":39246,\"text\":\"不\"},{\"attribute\":{},\"end_time\":39753,\"start_time\":39500,\"text\":\"住\"},{\"attribute\":{},\"end_time\":40633,\"start_time\":40166,\"text\":\"采\"},{\"attribute\":{},\"end_time\":41153,\"start_time\":40686,\"text\":\"摘\"},{\"attribute\":{},\"end_time\":41485,\"start_time\":41153,\"text\":\"\"}],\"text\":\"忍不住采摘\",\"startTime\":38766,\"endTime\":41485},{\"words\":[{\"attribute\":{},\"end_time\":43073,\"start_time\":42620,\"text\":\"童\"},{\"attribute\":{},\"end_time\":43660,\"start_time\":43286,\"text\":\"梦\"},{\"attribute\":{},\"end_time\":44033,\"start_time\":43660,\"text\":\"悠\"},{\"attribute\":{},\"end_time\":44540,\"start_time\":44086,\"text\":\"哉\"},{\"attribute\":{},\"end_time\":44540,\"start_time\":44540,\"text\":\" \"},{\"attribute\":{},\"end_time\":44800,\"start_time\":44540,\"text\":\"岁\"},{\"attribute\":{},\"end_time\":45073,\"start_time\":44800,\"text\":\"月\"},{\"attribute\":{},\"end_time\":45780,\"start_time\":45526,\"text\":\"轻\"},{\"attribute\":{},\"end_time\":46033,\"start_time\":45780,\"text\":\"摆\"},{\"attribute\":{},\"end_time\":46445,\"start_time\":46033,\"text\":\"\"}],\"text\":\"童梦悠哉 岁月轻摆\",\"startTime\":42620,\"endTime\":46445},{\"words\":[{\"attribute\":{},\"end_time\":46720,\"start_time\":46446,\"text\":\"天\"},{\"attribute\":{},\"end_time\":46993,\"start_time\":46720,\"text\":\"真\"},{\"attribute\":{},\"end_time\":47680,\"start_time\":47406,\"text\":\"无\"},{\"attribute\":{},\"end_time\":47953,\"start_time\":47680,\"text\":\"邪\"},{\"attribute\":{},\"end_time\":47953,\"start_time\":47953,\"text\":\" \"},{\"attribute\":{},\"end_time\":48873,\"start_time\":48406,\"text\":\"乐\"},{\"attribute\":{},\"end_time\":49460,\"start_time\":49086,\"text\":\"在\"},{\"attribute\":{},\"end_time\":49820,\"start_time\":49460,\"text\":\"心\"},{\"attribute\":{},\"end_time\":50273,\"start_time\":49820,\"text\":\"怀\"},{\"attribute\":{},\"end_time\":50405,\"start_time\":50273,\"text\":\"\"}],\"text\":\"天真无邪 乐在心怀\",\"startTime\":46446,\"endTime\":50405},{\"words\":[{\"attribute\":{},\"end_time\":50873,\"start_time\":50406,\"text\":\"莲\"},{\"attribute\":{},\"end_time\":51420,\"start_time\":51046,\"text\":\"香\"},{\"attribute\":{},\"end_time\":51760,\"start_time\":51420,\"text\":\"漫\"},{\"attribute\":{},\"end_time\":52100,\"start_time\":51760,\"text\":\"开\"},{\"attribute\":{},\"end_time\":52100,\"start_time\":52100,\"text\":\" \"},{\"attribute\":{},\"end_time\":52260,\"start_time\":52100,\"text\":\"时\"},{\"attribute\":{},\"end_time\":52513,\"start_time\":52260,\"text\":\"光\"},{\"attribute\":{},\"end_time\":53340,\"start_time\":52966,\"text\":\"难\"},{\"attribute\":{},\"end_time\":53713,\"start_time\":53340,\"text\":\"再\"},{\"attribute\":{},\"end_time\":53725,\"start_time\":53713,\"text\":\"\"}],\"text\":\"莲香漫开 时光难再\",\"startTime\":50406,\"endTime\":53725},{\"words\":[{\"attribute\":{},\"end_time\":54080,\"start_time\":53726,\"text\":\"这\"},{\"attribute\":{},\"end_time\":54340,\"start_time\":54080,\"text\":\"般\"},{\"attribute\":{},\"end_time\":54713,\"start_time\":54340,\"text\":\"童\"},{\"attribute\":{},\"end_time\":55300,\"start_time\":54926,\"text\":\"趣\"},{\"attribute\":{},\"end_time\":55300,\"start_time\":55300,\"text\":\" \"},{\"attribute\":{},\"end_time\":55640,\"start_time\":55300,\"text\":\"永\"},{\"attribute\":{},\"end_time\":56000,\"start_time\":55640,\"text\":\"不\"},{\"attribute\":{},\"end_time\":56393,\"start_time\":56000,\"text\":\"更\"},{\"attribute\":{},\"end_time\":56873,\"start_time\":56406,\"text\":\"改\"},{\"attribute\":{},\"end_time\":57285,\"start_time\":56873,\"text\":\"\"}],\"text\":\"这般童趣 永不更改\",\"startTime\":53726,\"endTime\":57285},{\"words\":[{\"attribute\":{},\"end_time\":58553,\"start_time\":58086,\"text\":\"不\"},{\"attribute\":{},\"end_time\":59160,\"start_time\":58806,\"text\":\"解\"},{\"attribute\":{},\"end_time\":59500,\"start_time\":59160,\"text\":\"藏\"},{\"attribute\":{},\"end_time\":59740,\"start_time\":59500,\"text\":\"踪\"},{\"attribute\":{},\"end_time\":59993,\"start_time\":59740,\"text\":\"迹\"},{\"attribute\":{},\"end_time\":61445,\"start_time\":59993,\"text\":\"\"}],\"text\":\"不解藏踪迹\",\"startTime\":58086,\"endTime\":61445},{\"words\":[{\"attribute\":{},\"end_time\":61913,\"start_time\":61446,\"text\":\"浮\"},{\"attribute\":{},\"end_time\":62473,\"start_time\":62006,\"text\":\"萍\"},{\"attribute\":{},\"end_time\":63393,\"start_time\":62926,\"text\":\"一\"},{\"attribute\":{},\"end_time\":63860,\"start_time\":63406,\"text\":\"道\"},{\"attribute\":{},\"end_time\":64313,\"start_time\":63860,\"text\":\"开\"},{\"attribute\":{},\"end_time\":65845,\"start_time\":64313,\"text\":\"\"}],\"text\":\"浮萍一道开\",\"startTime\":61446,\"endTime\":65845},{\"words\":[{\"attribute\":{},\"end_time\":66313,\"start_time\":65846,\"text\":\"留\"},{\"attribute\":{},\"end_time\":66900,\"start_time\":66526,\"text\":\"下\"},{\"attribute\":{},\"end_time\":67273,\"start_time\":66900,\"text\":\"的\"},{\"attribute\":{},\"end_time\":67540,\"start_time\":67286,\"text\":\"痕\"},{\"attribute\":{},\"end_time\":67793,\"start_time\":67540,\"text\":\"迹\"},{\"attribute\":{},\"end_time\":68445,\"start_time\":67793,\"text\":\"\"}],\"text\":\"留下的痕迹\",\"startTime\":65846,\"endTime\":68445},{\"words\":[{\"attribute\":{},\"end_time\":68820,\"start_time\":68446,\"text\":\"是\"},{\"attribute\":{},\"end_time\":69000,\"start_time\":68820,\"text\":\"欢\"},{\"attribute\":{},\"end_time\":69273,\"start_time\":69000,\"text\":\"乐\"},{\"attribute\":{},\"end_time\":70120,\"start_time\":69766,\"text\":\"节\"},{\"attribute\":{},\"end_time\":70473,\"start_time\":70120,\"text\":\"拍\"},{\"attribute\":{},\"end_time\":72285,\"start_time\":70473,\"text\":\"\"}],\"text\":\"是欢乐节拍\",\"startTime\":68446,\"endTime\":72285},{\"words\":[{\"attribute\":{},\"end_time\":74033,\"start_time\":73566,\"text\":\"无\"},{\"attribute\":{},\"end_time\":74660,\"start_time\":74286,\"text\":\"忧\"},{\"attribute\":{},\"end_time\":75020,\"start_time\":74660,\"text\":\"的\"},{\"attribute\":{},\"end_time\":75260,\"start_time\":75020,\"text\":\"时\"},{\"attribute\":{},\"end_time\":75513,\"start_time\":75260,\"text\":\"光\"},{\"attribute\":{},\"end_time\":76925,\"start_time\":75513,\"text\":\"\"}],\"text\":\"无忧的时光\",\"startTime\":73566,\"endTime\":76925},{\"words\":[{\"attribute\":{},\"end_time\":77180,\"start_time\":76926,\"text\":\"纯\"},{\"attribute\":{},\"end_time\":77433,\"start_time\":77180,\"text\":\"真\"},{\"attribute\":{},\"end_time\":77913,\"start_time\":77446,\"text\":\"永\"},{\"attribute\":{},\"end_time\":78873,\"start_time\":78406,\"text\":\"不\"},{\"attribute\":{},\"end_time\":79180,\"start_time\":78926,\"text\":\"衰\"},{\"attribute\":{},\"end_time\":79433,\"start_time\":79180,\"text\":\"败\"},{\"attribute\":{},\"end_time\":81285,\"start_time\":79433,\"text\":\"\"}],\"text\":\"纯真永不衰败\",\"startTime\":76926,\"endTime\":81285},{\"words\":[{\"attribute\":{},\"end_time\":81560,\"start_time\":81286,\"text\":\"回\"},{\"attribute\":{},\"end_time\":81833,\"start_time\":81560,\"text\":\"忆\"},{\"attribute\":{},\"end_time\":82740,\"start_time\":82286,\"text\":\"那\"},{\"attribute\":{},\"end_time\":83000,\"start_time\":82740,\"text\":\"画\"},{\"attribute\":{},\"end_time\":83273,\"start_time\":83000,\"text\":\"面\"},{\"attribute\":{},\"end_time\":85165,\"start_time\":83273,\"text\":\"\"}],\"text\":\"回忆那画面\",\"startTime\":81286,\"endTime\":85165},{\"words\":[{\"attribute\":{},\"end_time\":85420,\"start_time\":85166,\"text\":\"温\"},{\"attribute\":{},\"end_time\":85673,\"start_time\":85420,\"text\":\"暖\"},{\"attribute\":{},\"end_time\":86633,\"start_time\":86166,\"text\":\"满\"},{\"attribute\":{},\"end_time\":87113,\"start_time\":86646,\"text\":\"胸\"},{\"attribute\":{},\"end_time\":87593,\"start_time\":87126,\"text\":\"怀\"},{\"attribute\":{},\"end_time\":89045,\"start_time\":87593,\"text\":\"\"}],\"text\":\"温暖满胸怀\",\"startTime\":85166,\"endTime\":89045}]}"
  }

  const output = await createKenBurnsVideoFromImages({
    scenes: data.scenes,
    subtitles: JSON.parse(data.subtitles),
    fadeDuration: 0,
  });

  const res1 = await uploadFile(output);
  console.log(res1);
}
 
main();