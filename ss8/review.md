
# Cách insert CSS
file css => link (nằm trong thẻ head)
thẻ style => style trong thẻ head
style inline => thuộc tính của thẻ

# Cascade
1. Rule nào xếp sau thì sẽ đè rule xếp trước
2. Tính điểm selector
  - inline style
  - id
  - class attr
  - tag

# Inheritance
Sẽ có một số css property (font-family, color, font-size, ..) áp dụng element cha => element con cũng được áp dụng

# Box model
Hình chữ nhật để mô tả HTML
content => padding => border => margin
width, height là nhắc đến width, height của content
=> border-box: box-sizing => width, height = content + padding + border
margin collapse

# Layout flow (Display inline, block)
Block => Hiển thị một khối => auto ngắt dòng trên và dưới => Chỉnh sửa được width, height
Inline => Không có ngắt dòng => Phụ thuộc vào content
=> Không chỉnh sửa được widht, height
display: inline-block => Hiển thị như inline, chỉnh được width, height

# Display flex (display grid)
Flex container => trục dọc và trục ngang => cần css sao cho phù hợp
Flex item

# Position (top, left, right, bottom)
static => mặc định
relative => so với vị trí mặc định của nó
absolute => so với cha gần nhất, position khác static 
(thường sẽ là relative => do muốn el cha không thay đổi vị trí nhưng vẫn muốn khác static)
fixed => so với viewport (màn hình) => tính width, height = 0, đè lên content ở dưới
sticky => nếu chưa scroll => relative, kéo scroll => fixed

=> Đọc thêm: CSS Unit (px, em, rem, %), CSS Transition, CSS Animation

https://www.w3schools.com/howto/default.asp
