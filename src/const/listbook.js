const ran = (max) => {
    return Math.random() * max
}

export const list = [
    {
        id: 1,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/kim-dong_bia_195mmx260mm.jpg?itok=Wp5OCpwL',
        title: 'Kim Đồng',
        author: 'Nhiều tác giả',
        discount: 98000,
        amount: 51000,
        topic: 1,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 2,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/viet-nam-su-luoc_ban-dac-biet_bia_16x24_bia-cung.jpg?itok=yf4MQTVn',
        title: 'Việt Nam sử lược - Bản đặc biệt',
        author: 'Trần Trọng Kim',
        discount: 198000,
        amount: 178000,
        topic: 1,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 3,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/bac-ho-viet-di-chuc.jpg?itok=fuHz3kX0',
        title: 'Bác Hồ viết di chúc và di chúc của Bác Hồ',
        author: 'Nhiều tác giả',
        discount: 40000,
        amount: 20000,
        topic: 1,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 4,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/ly-nam-de.jpg?itok=avcLDhcY',
        title: 'Truyện tranh lịch sử Việt Nam - Lý Nam Đế',
        author: 'Tạ Huy Long',
        discount: 15000,
        amount: 13500,
        topic: 1,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 5,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/toi-ke-em-nghe-truong-sa.jpg?itok=hxYWDZHf',
        title: 'Tôi kể em nghe chuyện Trường Sa',
        author: 'Nguyễn Xuân Thủy',
        discount: 36000,
        amount: 32400,
        topic: 1,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 6,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/giao-duc-nhi-dong_bia-final-in-1.jpg?itok=odJolgFH',
        title: 'Giáo dục nhi đồng',
        author: 'Đạm Phương Nữ Sử',
        discount: 55000,
        amount: 49500,
        topic: 2,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 7,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/bach-khoa-thu-vi-sao_bo-2.jpg?itok=AeoL-8ig',
        title: 'Bách khoa thư Vì sao - Bộ 2 (26 cuốn)',
        author: 'Nhiều tác giả',
        discount: 208000,
        amount: 187000,
        topic: 2,
        iventory: ran(20),
        rate: ran(5)
    },{
        id: 8,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/4-5t_q1.jpg?itok=--SMuMSP',
        title: 'Thực hành phát triển kỹ năng tuổi mẫu giáo 4-5 tuổi (Quyển 1)',
        author: 'Nhiều tác giả',
        discount: 40000,
        amount: 36000,
        topic: 2,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 9,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/yoga-cho-tre-em_bia_tb2019-1.jpg?itok=XTTcaHQN',
        title: 'Yoga cho trẻ em',
        author: 'Nhiều tác giả',
        discount: 48000,
        amount: 43000,
        topic: 2,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 10,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/giai-cuu-doi-bong-lon-hoang_bia-1_0.jpg?itok=id7sRWFZ',
        title: 'Giải cứu đội bóng lợn hoang',
        author: 'Atkia',
        discount: 50000,
        amount: 45000,
        topic: 2,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 11,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/truyen-co-tich-viet-nam_bia-t2_tb2019-1.jpg?itok=_zUlDGp-',
        title: 'Truyện cổ tích Việt Nam - Tập 2',
        author: 'Nhiều tác giả',
        discount: 68000,
        amount: 61000,
        topic: 3,
        iventory: ran(20),
        rate: ran(5)
    },{
        id: 12,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/chuyen-ke-lop-cay-me-bia.jpg?itok=pysi4EM7',
        title: 'Chuyện kể ở lớp cây me',
        author: 'Nguyễn Thị Kim Hòa',
        discount: 65000,
        amount: 58000,
        topic: 3,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 13,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/de-men-phieu-luu-ky-_13x19_bia_tb2019-1.jpg?itok=T3r2mS-Q',
        title: 'Dế mèn phiêu lưu ký',
        author: 'Tô Hoài',
        discount: 50000,
        amount: 45000,
        topic: 3,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 14,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/ha-canh-cuoi-nam-cover-13x18cm-final-01.jpg?itok=6GCvkbS-',
        title: 'Hạ cánh cuối năm',
        author: 'Phan Việt Lâm',
        discount: 55000,
        amount: 49000,
        topic: 3,
        iventory: ran(20),
        rate: ran(5)
    },{
        id: 15,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/chuyen-ke-thanh-ngu-tb2019_2.jpg?itok=LhwIBP5D',
        title: 'Chuyện kể thành ngữ',
        author: 'Nhiều tác giả',
        discount: 94000,
        amount: 84000,
        topic: 3,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 16,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/3_50.jpg?itok=2Ki_9D5e',
        title: 'Học viện viễn thám - 3 - Vòng xoắn kép',
        author: 'Trudi Trueit',
        discount: 125000,
        amount: 112000,
        topic: 4,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 17,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/alice-o-xu-so-than-tien_bia-1.jpg?itok=D3EEVBQq',
        title: 'Alice ở xứ sở thần tiên',
        author: 'Lewis Carroll',
        discount: 40000,
        amount: 35000,
        topic: 4,
        iventory: ran(20),
        rate: ran(5)
    },{
        id: 18,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/julie_con-cua-bay-soi-bia1-4-1.jpg?itok=TBpIVg7A',
        title: 'Julie con của bầy sói',
        author: 'Jean Craighead George',
        discount: 45000,
        amount: 40000,
        topic: 4,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 19,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/5_51.jpg?itok=KznXjOBl',
        title: 'Ngôi nhà nhỏ trên thảo nguyên-5-ven bờ hồ bạc',
        author: 'Laura Ingalls Wilder',
        discount: 73000,
        amount: 65000,
        topic: 4,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 20,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/mot-cuoc-phieu-luu-ra-tro-va-rac-roi.jpg?itok=hDFsBbnB',
        title: 'Một cuộc phiêu lưu ra trò và rắc rối',
        author: 'Nhiều tác giả',
        discount: 48000,
        amount: 43000,
        topic: 4,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 21,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/giay-phut-dieu-ki.jpg?itok=_HybwrOB',
        title: 'Tô màu cùng công chúa: giây phút diệu kì',
        author: 'Disney Enterprises Inc',
        discount: 20000,
        amount: 18000,
        topic: 5,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id:22,
        src: 'hhttps://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/nang-tien-coc.jpg?itok=CPh4swZ9',
        title: 'Nàng tiên cóc',
        author: 'Nhiều tác giả',
        discount: 20000,
        amount: 18000,
        topic: 5,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 23,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/khoc-khong-phai-la-xau.jpg?itok=fgnFMaZX',
        title: 'Khóc không phải là xấu',
        author: 'Nhiều tác giả',
        discount: 33000,
        amount: 29000,
        topic: 5,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 24,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/nhung-cuoc-chu-du-cua-ti-ech_bia_tb-1.jpg?itok=it_LM9vx',
        title: 'Những cuộc chu du của ếch',
        author: 'Jakob Martin Strid',
        discount: 60000,
        amount: 54000,
        topic: 5,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 26,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/bob-vi-cuu-tinh.jpg?itok=hwhsOQNm',
        title: 'Chàng mèo đường phó BOB, vị cứu tinh',
        author: 'Nhiều tác giả',
        discount: 45000,
        amount: 40000,
        topic: 5,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 27,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/thanh-pho-len-day-cot1.jpg?itok=RGrr_GR4',
        title: 'Nobita và cuộc phiêu lưu ở thành phố dây cót - Tập 1',
        author: 'Fujiko F Fujio',
        discount: 25000,
        amount: 22000,
        topic: 6,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 28,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/36_8.jpg?itok=O0M70iU8',
        title: 'Thám tử lừng danh Conan - Tập 36',
        author: 'Nhiều tác giả',
        discount: 18000,
        amount: 16000,
        topic: 6,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 29,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/3_25.jpg?itok=vEduV0Zj',
        title: 'Pokemon - Cuộc phiêu lưu của PiPi',
        author: 'Kosaku Anakubo',
        discount: 22000,
        amount: 19000,
        topic: 6,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 30,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/56_0.jpg?itok=c-yI9Kts',
        title: 'Onepiece - Tập 56',
        author: 'Eiichiro Oda',
        discount: 19000,
        amount: 17000,
        topic: 6,
        iventory: ran(20),
        rate: ran(5)
    },
    {
        id: 31,
        src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/21_8.jpg?itok=VKzLY7wF',
        title: 'Naruto - Tập 21',
        author: 'Masashi Kishimoto',
        discount: 20000,
        amount: 18000,
        topic: 6,
        iventory: ran(20),
        rate: ran(5)
    },

]

export const fieldsBook = [
    {
        id: 1,
        name: 'Lịch Sử - Truyền Thống',
        path: 'lich-su-truyen-thong'
    },
    {
        id: 2,
        name: 'Kiến thức - Khoa Học',
        path: 'kien-thuc-khoa-hoc'
    },
    {
        id: 3,
        name: 'Văn Học Việt Nam',
        path: 'van-hoc-viet-nam'
    },
    {
        id: 4,
        name: 'Văn Học Nước Ngoài',
        path: 'van-hoc-nuoc-ngoai'
    },
    {
        id: 5,
        name: 'Truyện tranh',
        path:'truyen-tranh'
    },
    {
        id: 6,
        name: 'Manga - Comic',
        path:'manga-comic'
    },
    {
        id: 7,
        name: 'Sách bán chạy nhất',
        path:'sach-ban-chay'
    },
    {
        id: 8,
        name: 'Sách mới',
        path:'sach-moi'
    },
    {
        id: 9,
        name: 'Sách giảm giá',
        path:'sach-giam-gia'
    },
    

]