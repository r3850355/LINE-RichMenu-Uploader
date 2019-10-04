const richmenu = require('./uploader')

function main() {
  // 範例 Example Code
  // const setting = new richmenu({
  //   accessToken: 'bTXZ2q2X7XwPzGAn1aAktGel5hJLTXs+7KFXqha4qqdrgP04rONQ+93bxukLiul9ncUl0oP/OnX8EShwHVjDp0Lr5dsay76KYTr0TviQpBf/PiXO/LOpiQmjfVGUYhWQfeY9sLGRXgo3xvw=',
  //   richMenuData: {
  //     "size": {
  //       "width": 2500,
  //       "height": 843
  //     },
  //     "selected": true,
  //     "name": "圖文選單 1",
  //     "chatBarText": "查看更多資訊",
  //     "areas": [
  //       {
  //         "bounds": {
  //           "x": 866,
  //           "y": 111,
  //           "width": 747,
  //           "height": 627
  //         },
  //         "action": {
  //           "type": "message",
  //           "text": "範圍 1"
  //         }
  //       }
  //     ]
  //   },
  //   imagePath: './image.png'
  // })
  const setting = new richmenu({
    accessToken: '', // 你的Channel AccessToken
    richMenuData: {}, // rich menu object
    imagePath: '' // 圖片路徑
  })
  setting.run()
}

main()