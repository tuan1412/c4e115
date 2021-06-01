Làm quen với git

Git: VCS version control system => hệ thống quản lý phiên bản
Đồng bộ và quản lý source code giữa các thành viên với nhau

Git vs Github (Gitlab, Bitbucket)
Cài đặt git ở local => Win, MacOS, Linux
Repository (Thư mục chứa code) => Local Repository

Github: Git Provider (Remote Server)
Kết nối được từ Local repository => Remote repository

Một số câu lệnh cơ bản về Git
git clone: clone code từ trên remote repository về thành local repo (lần đầu)
git pull origin master(main): kéo code từ remote repo đã clone từ trước

Workflow
Tạo repo trên github
Local repo
Kết nối tới git: git init
Kết nối local repo tới remote repo => git remote add origin ...

Từ đây cứ mỗi một lần mọi người muốn một phiên bản mới => lặp lại
git add . => add tất cả các dữ liệu thay đổi để git biết rằng những file này sẽ nằm trong phiên bản mới
git commit -m 'version a' => tạo một phiên bản ở local
git push origin master (main) => code mới => remote repo
