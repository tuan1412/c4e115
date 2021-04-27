# Mảng
1. Tại sao cần mảng?
- Cần quản lý danh sách các phần tử cùng ý nghĩa
- Chỉ cần 1 biến kiểu dữ liệu mảng (Array)

2. Khởi tạo (Init)
let arr = []
let movies = ['End game', 'Superman', 'Batman']
=> arr.length = 0

// CRUD
3. Create (C)
Thêm phần tử vào trong mảng => Mảng bị thay đổi
arr.push => Thêm vào cuối
Thêm vào bất kì nào của mảng thì dùng cú pháp?

4. Read (R)
=> Mảng không đổi
Truy cập qua chỉ số (index) => đánh số từ 0 => movies: 0, 1, 2
Cú pháp: lấy Superman => movies[1], movies["1"]

5. Update (U)
=> Mảng thay đổi
movies[1] = 'Người nhện' => let x = 1; movies[x] = 'Người nhện'

6. Delete (D)
=> Mảng thay đổi
movies.splice(arg1, agr2)
arg1: vị trí bắt đầu xoá
arg2: số phần tử sẽ xoá => movies.splice(1, 2) => movies = ['End game', 'Batman']