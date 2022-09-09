let avatar = document.querySelector('.header-avatar'),
avatarImg = document.querySelector('.header-avatar .image'),
headerNotification = document.querySelector('.header-notification'),
messenger = document.querySelector('.header-messenger'),
InputSearch = document.querySelector('header .input input'),
searchIcon = document.querySelector('.search')

let userAccount = document.querySelector('.user-account'),
notification = document.querySelector('.notification'),
chats = document.querySelector('.chats'),
createMessegeBtn = document.querySelector('.create-new-messege'),
closeMessageBtn = document.querySelector('.close-message-container'),
messageContainer = document.querySelector('.message-container'),
createPostBtn = document.querySelector('.create-post'),
postContainer = document.querySelector('.post-container'),
postOverlay = document.querySelector('.post-container-overlay'),
closePost = document.querySelector('.close-post-container')


userAccount.insertAdjacentHTML('beforeend', `

<div class="user-profile">
    <div class="account-avatar">
        <img src="./assets/avatar.jpeg" alt="">
        <span class="account-name">Ahmed Irheem</span>
    </div>
    <span class="seperat"></span>
    <div class="see-profile">
        <a href="#" class="see-profile-link">See all profiles</a>
    </div>
</div>
<div class="profile-setting">
    <div class="profile-setting-line">
        <span class="setting-logo">
            <span class="setting-logo-icon">
                <i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/xjV4j8zXH-H.png&quot;); background-position: 0px -126px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>
            </span>
            <span class="setting-name">Settings & privacy</span>
        </span>
        <span class="see-setting">
            <i data-visualcompletion="css-img" class="gneimcpu oee9glnz" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/xjV4j8zXH-H.png&quot;); background-position: -108px -26px; background-size: auto; width: 24px; height: 24px; background-repeat: no-repeat; display: inline-block;"></i>
        </span>
    </div>
    <div class="profile-setting-line">
        <span class="setting-logo">
            <span class="setting-logo-icon">
                <i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/11hYwxNrWKf.png&quot;); background-position: 0px -314px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>
            </span>
            <span class="setting-name">Help & support</span>
        </span>
        <span class="see-setting">
            <i data-visualcompletion="css-img" class="gneimcpu oee9glnz" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/xjV4j8zXH-H.png&quot;); background-position: -108px -26px; background-size: auto; width: 24px; height: 24px; background-repeat: no-repeat; display: inline-block;"></i>
        </span>
    </div>
    <div class="profile-setting-line">
        <span class="setting-logo">
            <span class="setting-logo-icon">
                <i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/11hYwxNrWKf.png&quot;); background-position: 0px -230px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>
            </span>
            <span class="setting-name">Display & accessibility</span>
        </span>
        <span class="see-setting">
            <i data-visualcompletion="css-img" class="gneimcpu oee9glnz" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/xjV4j8zXH-H.png&quot;); background-position: -108px -26px; background-size: auto; width: 24px; height: 24px; background-repeat: no-repeat; display: inline-block;"></i>
        </span>
    </div>
    <div class="profile-setting-line">
        <span class="setting-logo">
            <span class="setting-logo-icon">
                <i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/z7oPL_uRLiD.png&quot;); background-position: 0px -50px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>
            </span>
            <span class="setting-name">Give feedback</span>
        </span>
    </div>
    <div class="profile-setting-line">
        <span class="setting-logo">
            <span class="setting-logo-icon">
                <i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/z7oPL_uRLiD.png&quot;); background-position: 0px -71px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>
            </span>
            <span class="setting-name">Log Out</span>
        </span>
    </div>
</div>
<div class="account-description">
    <span>Privacy  · Terms  · Advertising  · Ad Choices   · Cookies  ·   · Meta © 2022</span>
</div>
`
)

notification.insertAdjacentHTML('beforeend', `
<div class="notification-head">
        <span class="notification-title">Notifications</span>
        <span class="notification-more-info"><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 dmdr2h6l kgzac55p"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></span>
    </div>
    <div class="notification-filter">
        <span class="active">All</span>
        <span>Unread</span>
    </div>
    <div class="notification-start">
        <span>New</span>
        <span>See all</span>
    </div>
    <div class="notificats-container">
        <div class="notificat">
            <span class="notificat-info"><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 dmdr2h6l kgzac55p"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></span>
            <div class="notification-avatar">
                <img src="./assets/image2.jpg" alt="">
                <i data-visualcompletion="css-img" class="gneimcpu p9wrh9lq" style="height: 28px; width: 28px; background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/6lGW-8_Fcno.png&quot;); background-position: 0px -783px; background-size: auto; background-repeat: no-repeat; display: inline-block;"></i>
            </div>
            <div class="notification-data">
                <span class="notification-content"><b>Malak Y. Baraka</b> mentioned you in a comment in <b>Reach Education Fund Students&Alumni</b></span>
                <span class="notification-time">10 hours ago</span>
            </div>
            <span class="unread-icon"></span>
        </div>
        <div class="notificat">
            <span class="notificat-info"><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 dmdr2h6l kgzac55p"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></span>
            <div class="notification-avatar">
                <img src="./assets/image9.jpg" alt="">
                <i data-visualcompletion="css-img" class="gneimcpu p9wrh9lq" style="height: 28px; width: 28px; background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/6lGW-8_Fcno.png&quot;); background-position: 0px -783px; background-size: auto; background-repeat: no-repeat; display: inline-block;"></i>
            </div>
            <div class="notification-data">
                <span class="notification-content"><b>ليلى صيام</b> mentioned you in a comment in <b>فريق المتابعة B80</b></span>
                <span class="notification-time">22 hours ago</span>
            </div>
            <span class="unread-icon"></span>
        </div>
        <div class="notificat">
            <span class="notificat-info"><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 dmdr2h6l kgzac55p"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></span>
            <div class="notification-avatar">
                <img src="./assets/image9.jpg" alt="">
                <i data-visualcompletion="css-img" class="gneimcpu p9wrh9lq" style="height: 28px; width: 28px; background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/6lGW-8_Fcno.png&quot;); background-position: 0px -783px; background-size: auto; background-repeat: no-repeat; display: inline-block;"></i>
            </div>
            <div class="notification-data">
                <span class="notification-content"><b>ليلى صيام</b> commented on a photo you're following in <b>فريق المتابعة B80</b></span>
                <span class="notification-time">22 hours ago</span>
            </div>
            <span class="unread-icon"></span>
        </div>
        <div class="notificat">
            <span class="notificat-info"><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 dmdr2h6l kgzac55p"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></span>
            <div class="notification-avatar">
                <img src="./assets/image10.jpg" alt="">
                <img class="comick-imoge" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='10.25%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FEEA70'/%3e%3cstop offset='100%25' stop-color='%23F69B30'/%3e%3c/linearGradient%3e%3clinearGradient id='d' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23472315'/%3e%3cstop offset='100%25' stop-color='%238B3A0E'/%3e%3c/linearGradient%3e%3clinearGradient id='e' x1='50%25' x2='50%25' y1='0%25' y2='81.902%25'%3e%3cstop offset='0%25' stop-color='%23FC607C'/%3e%3cstop offset='100%25' stop-color='%23D91F3A'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.921365489 0 0 0 0 0.460682745 0 0 0 0 0 0 0 0 0.35 0'/%3e%3c/filter%3e%3cpath id='b' d='M16 8A8 8 0 110 8a8 8 0 0116 0'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='url(%23d)' d='M3 8.008C3 10.023 4.006 14 8 14c3.993 0 5-3.977 5-5.992C13 7.849 11.39 7 8 7c-3.39 0-5 .849-5 1.008'/%3e%3cpath fill='url(%23e)' d='M4.541 12.5c.804.995 1.907 1.5 3.469 1.5 1.563 0 2.655-.505 3.459-1.5-.551-.588-1.599-1.5-3.459-1.5s-2.917.912-3.469 1.5'/%3e%3cpath fill='%232A3755' d='M6.213 4.144c.263.188.502.455.41.788-.071.254-.194.369-.422.371-.78.011-1.708.255-2.506.612-.065.029-.197.088-.332.085-.124-.003-.251-.058-.327-.237-.067-.157-.073-.388.276-.598.545-.33 1.257-.48 1.909-.604a7.077 7.077 0 00-1.315-.768c-.427-.194-.38-.457-.323-.6.127-.317.609-.196 1.078.026a9 9 0 011.552.925zm3.577 0a8.953 8.953 0 011.55-.925c.47-.222.95-.343 1.078-.026.057.143.104.406-.323.6a7.029 7.029 0 00-1.313.768c.65.123 1.363.274 1.907.604.349.21.342.44.276.598-.077.18-.203.234-.327.237-.135.003-.267-.056-.332-.085-.797-.357-1.725-.6-2.504-.612-.228-.002-.351-.117-.422-.37-.091-.333.147-.6.41-.788z'/%3e%3c/g%3e%3c/svg%3e" alt="" style="height: 28px; width: 28px;">
            </div>
            <div class="notification-data">
                <span class="notification-content"><b>أنس فضل الشافعي</b> reacted to your comment: <q>كل الجامعات تفعلت إلا الحزينة تبعتنا</q></span>
                <span class="notification-time">20 hours ago</span>
            </div>
            <span class="unread-icon"></span>
        </div>
        <div class="notificat">
            <span class="notificat-info"><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 dmdr2h6l kgzac55p"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></span>
            <div class="notification-avatar">
                <img src="./assets/image7.jpg" alt="">
                <img class="gneimcpu p9wrh9lq" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" alt="" style="height: 28px; width: 28px;">
            </div>
            <div class="notification-data">
                <span class="notification-content"><b>Majed Habil</b> likes your comment: <q>You are Awesome</q></span>
                <span class="notification-time">12 hours ago</span>
            </div>
            <span class="unread-icon"></span>
        </div>
        <div class="notificat">
            <span class="notificat-info"><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 dmdr2h6l kgzac55p"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></span>
            <div class="notification-avatar">
                <img src="./assets/image4.jpg" alt="">
                <img class="gneimcpu p9wrh9lq" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e" alt="" style="height: 28px; width: 28px;">
            </div>
            <div class="notification-data">
                <span class="notification-content"><b>Mohammad Omran</b> reacted to your comment" <q>هون اللَه عليك</q></span>
                <span class="notification-time">16 hours ago</span>
            </div>
            <span class="unread-icon"></span>
        </div>
        <div class="notificat">
            <span class="notificat-info"><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 dmdr2h6l kgzac55p"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></span>
            <div class="notification-avatar">
                <img src="./assets/image3.jpg" alt="">
                <i data-visualcompletion="css-img" class="gneimcpu p9wrh9lq" style="height: 28px; width: 28px; background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/6lGW-8_Fcno.png&quot;); background-position: 0px -1450px; background-size: auto; background-repeat: no-repeat; display: inline-block;"></i>
            </div>
            <div class="notification-data">
                <span class="notification-content"><b>Doaa Osama</b> added a new photo</span>
                <span class="notification-time">41 minutes ago</span>
            </div>
            <span class="unread-icon"></span>
        </div>
    </div>`)

chats.insertAdjacentHTML('beforeend', `
<div class="chats-head">
        <span class="chats-title">Chats</span>
        <div class="chats-icons">
            <span class="icon"><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 dmdr2h6l kgzac55p"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></span>
            <span class="icon"><i data-visualcompletion="css-img" class="gneimcpu oee9glnz" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/4NKHyLGgpk3.png&quot;); background-position: 0px -484px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i></span>
            <span class="icon"><i data-visualcompletion="css-img" class="gneimcpu oee9glnz" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/1AXy1fubVbE.png&quot;); background-position: 0px -242px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i></span>
            <span class="icon"><i data-visualcompletion="css-img" class="gneimcpu oee9glnz" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/1AXy1fubVbE.png&quot;); background-position: 0px -1377px; background-size: auto; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;"></i></span>
        </div>
    </div>
    <div class="search-chats">
        <input type="search" placeholder="Search Messenger">
        <span class="search">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
        </span>
    </div>
    <div class="chats-container">
        <div class="chat">
            <span class="chat-info"><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 dmdr2h6l kgzac55p"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></span>
            <div class="messeger-messege-info">
                <div class="chat-avatar">
                    <img src="./assets/image13.jpg">
                </div>
                <div class="chat-data">
                    <div class="chater-name"><span>فارس عكيلة</span></div>
                    <div class="messege-content">
                        <span class="messege-sender">You:</span>
                        <span class="massege">متى رايح</span>
                        <span class="separator">.</span>
                        <span class="time">1d</span>
                    </div>
                </div>
            </div>
            <div class="chat-addition">
                <svg data-testid="message-delivery-status-icon-delivered" class="db0glzta" height="16px" width="16px" viewBox="2 2 20 20" role="img" xmlns="http://www.w3.org/2000/svg"><title>Delivered</title><path d="m12 2a10 10 0 1 0 10 10 10.011 10.011 0 0 0 -10-10zm5.219 8-6.019 6.016a1 1 0 0 1 -1.414 0l-3.005-3.008a1 1 0 1 1 1.419-1.414l2.3 2.3 5.309-5.31a1 1 0 1 1 1.41 1.416z"></path></svg>
            </div>
        </div>
        <div class="chat">
        <span class="chat-info"><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 dmdr2h6l kgzac55p"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></span>
            <div class="messeger-messege-info">
                <div class="chat-avatar">
                    <img src="./assets/image4.jpg">
                </div>
                <div class="chat-data">
                    <div class="chater-name"><span>Abdallah Er</span></div>
                    <div class="messege-content">
                        <span class="messege-sender">You:</span>
                        <span class="massege">أوك</span>
                        <span class="separator">.</span>
                        <span class="time">1d</span>
                    </div>
                </div>
            </div>
            <div class="chat-addition">
                <svg data-testid="message-delivery-status-icon-delivered" class="db0glzta" height="16px" width="16px" viewBox="2 2 20 20" role="img" xmlns="http://www.w3.org/2000/svg"><title>Delivered</title><path d="m12 2a10 10 0 1 0 10 10 10.011 10.011 0 0 0 -10-10zm5.219 8-6.019 6.016a1 1 0 0 1 -1.414 0l-3.005-3.008a1 1 0 1 1 1.419-1.414l2.3 2.3 5.309-5.31a1 1 0 1 1 1.41 1.416z"></path></svg>
            </div>
        </div>
        <div class="chat">
        <span class="chat-info"><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 dmdr2h6l kgzac55p"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></span>
            <div class="messeger-messege-info">
                <div class="chat-avatar">
                    <img src="./assets/image5.jpg">
                </div>
                <div class="chat-data">
                    <div class="chater-name"><span>Khaled Emad</span></div>
                    <div class="messege-content">
                        <span class="massege">بكرا جاييك</span>
                        <span class="separator">.</span>
                        <span class="time">1d</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="chat">
        <span class="chat-info"><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 dmdr2h6l kgzac55p"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></span>
            <div class="messeger-messege-info">
                <div class="chat-avatar">
                    <img src="./assets/image6.jpg">
                </div>
                <div class="chat-data">
                    <div class="chater-name"><span>محمد الهيقي</span></div>
                    <div class="messege-content">
                        <span class="messege-sender">You:</span>
                        <span class="massege">وين أنت</span>
                        <span class="separator">.</span>
                        <span class="time">1d</span>
                    </div>
                </div>
            </div>
            <div class="chat-addition">
                <img src="./assets/image6.jpg">
            </div>
        </div>
        <div class="chat">
        <span class="chat-info"><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 dmdr2h6l kgzac55p"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></span>
            <div class="messeger-messege-info">
                <div class="chat-avatar">
                    <img src="./assets/image7.jpg">
                </div>
                <div class="chat-data">
                    <div class="chater-name"><span>Abed Azzam</span></div>
                    <div class="messege-content">
                        <span class="massege">تمام</span>
                        <span class="separator">.</span>
                        <span class="time">2d</span>
                    </div>
                </div>
            </div>
            <div class="chat-addition">
                <span class="undread-massege"></span>
            </div>
        </div>
        <div class="chat">
        <span class="chat-info"><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 dmdr2h6l kgzac55p"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></span>
            <div class="messeger-messege-info">
                <div class="chat-avatar">
                    <img src="./assets/image8.jpg">
                </div>
                <div class="chat-data">
                    <div class="chater-name"><span>أنس فضل الشافعي</span></div>
                    <div class="messege-content">
                        <span class="messege-sender">You:</span>
                        <span class="massege">تعيش وتاكل</span>
                        <span class="separator">.</span>
                        <span class="time">1w</span>
                    </div>
                </div>
            </div>
            <div class="chat-addition">
                <svg data-testid="message-delivery-status-icon-delivered" class="db0glzta" height="16px" width="16px" viewBox="2 2 20 20" role="img" xmlns="http://www.w3.org/2000/svg"><title>Delivered</title><path d="m12 2a10 10 0 1 0 10 10 10.011 10.011 0 0 0 -10-10zm5.219 8-6.019 6.016a1 1 0 0 1 -1.414 0l-3.005-3.008a1 1 0 1 1 1.419-1.414l2.3 2.3 5.309-5.31a1 1 0 1 1 1.41 1.416z"></path></svg>
            </div>
        </div>
        <div class="chat">
        <span class="chat-info"><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 dmdr2h6l kgzac55p"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></span>
            <div class="messeger-messege-info">
                <div class="chat-avatar">
                    <img src="./assets/image9.jpg">
                </div>
                <div class="chat-data">
                    <div class="chater-name"><span>Mo Tison</span></div>
                    <div class="messege-content">
                        <span class="massege">Yes I will call him now</span>
                        <span class="separator">.</span>
                        <span class="time">1w</span>
                    </div>
                </div>
            </div>
            <div class="chat-addition">
                <span class="undread-massege"></span>
            </div>
        </div>
        <div class="chat">
        <span class="chat-info"><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 dmdr2h6l kgzac55p"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></span>
            <div class="messeger-messege-info">
                <div class="chat-avatar">
                    <img src="./assets/image10.jpg">
                </div>
                <div class="chat-data">
                    <div class="chater-name"><span>Ashraf Azzam</span></div>
                    <div class="messege-content">
                        <span class="messege-sender">You:</span>
                        <span class="massege">شو رمضان</span>
                        <span class="separator">.</span>
                        <span class="time">2w</span>
                    </div>
                </div>
            </div>
            <div class="chat-addition">
                <img src="./assets/image10.jpg">
            </div>
        </div>
        <div class="chat">
        <span class="chat-info"><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 dmdr2h6l kgzac55p"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></span>
            <div class="messeger-messege-info">
                <div class="chat-avatar">
                    <img src="./assets/image11.jpg">
                </div>
                <div class="chat-data">
                    <div class="chater-name"><span>Mohammad Awad</span></div>
                    <div class="messege-content">
                        <span class="massege">يصل ي باشا</span>
                        <span class="separator">.</span>
                        <span class="time">2w</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="chat">
        <span class="chat-info"><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4 dmdr2h6l kgzac55p"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></span>
            <div class="messeger-messege-info">
                <div class="chat-avatar">
                    <img src="./assets/image12.jpg">
                </div>
                <div class="chat-data">
                    <div class="chater-name"><span>جعفر سامي</span></div>
                    <div class="messege-content">
                        <span class="messege-sender">You:</span>
                        <span class="massege">صباح النور</span>
                        <span class="separator">.</span>
                        <span class="time">5w</span>
                    </div>
                </div>
            </div>
            <div class="chat-addition">
                <img src="./assets/image12.jpg">
            </div>
        </div>
    </div>`)

    
avatar.addEventListener('click', () =>{
    userAccount.classList.toggle('active')
    notification.classList.remove('active')
    chats.classList.remove('active')
})
headerNotification.addEventListener('click', () =>{
    notification.classList.toggle('active')
    userAccount.classList.remove('active')
    chats.classList.remove('active')
})
messenger.addEventListener('click', () =>{
    chats.classList.toggle('active')
    userAccount.classList.remove('active')
    notification.classList.remove('active')
})