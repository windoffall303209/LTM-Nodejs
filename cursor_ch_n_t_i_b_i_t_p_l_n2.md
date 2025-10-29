# Chọn đề tài bài tập lớn
_Exported on 10/29/2025 at 01:21:26 GMT+7 from Cursor (1.7.54)_

---

**User**

chúng ta ko nhắc gì tới code nhé, chỉ nói về việc chọn dề tài bài tập lớn cho bộ môn "Lập trình mạng" nhé

---

**Cursor**

Chào bạn! Tôi rất vui được thảo luận về việc chọn đề tài bài tập lớn cho môn Lập trình mạng.

## Các đề tài phổ biến và hấp dẫn:

### 1. **Ứng dụng Chat (Messaging Application)**
- Đề tài kinh điển, dễ mở rộng từ cơ bản đến nâng cao
- Có thể làm chat 1-1, chat nhóm, gửi file, emoji
- Học được: Socket, Threading, Protocol design

### 2. **Ứng dụng Chia sẻ File (File Sharing/Transfer)**
- Transfer file giữa các máy trong mạng LAN
- Có thể thêm tính năng: pause/resume, multi-threading download
- Học được: TCP/UDP, xử lý luồng dữ liệu lớn

### 3. **Game Multiplayer đơn giản**
- Cờ caro, bài tập ô chữ, quiz game
- Realtime gameplay với nhiều người chơi
- Học được: UDP cho realtime, state synchronization

### 4. **Ứng dụng Quản lý (Management System)**
- Quản lý thư viện, bán hàng, điểm danh
- Client-Server architecture với database
- Học được: HTTP/REST API, Database integration

### 5. **Remote Desktop/Screen Sharing**
- Điều khiển máy từ xa, xem màn hình
- Khá thách thức nhưng rất thú vị
- Học được: Streaming, compression, real-time data

### 6. **IoT Simulation/Smart Home**
- Mô phỏng các thiết bị IoT kết nối mạng
- Dashboard điều khiển các thiết bị
- Học được: MQTT, WebSocket, sensor data

## Tiêu chí nên cân nhắc:

✅ **Độ phức tạp phù hợp** với thời gian và kiến thức hiện tại  
✅ **Tính ứng dụng thực tế** - có thể demo được  
✅ **Khả năng mở rộng** - có thể thêm tính năng nếu còn thời gian  
✅ **Tài liệu tham khảo** - có nhiều nguồn học không  

Bạn đang nghĩ đến hướng nào, hoặc có sở thích về loại ứng dụng nào không? Tôi có thể tư vấn cụ thể hơn! 😊

---

**User**

đọc file demp đi

---

**Cursor**

Tuyệt vời! Tôi vừa đọc file danh sách đề tài của bạn. Đây là danh sách rất chi tiết với **56 đề tài** chia thành **6 nhóm chính**:

## 📊 Tổng quan:

### **6 Nhóm đề tài:**
1. **🔌 Advanced Socket Programming** (8 topics) - Tập trung vào high-performance, I/O patterns
2. **🌐 Modern Web Protocols** (10 topics) - HTTP/3, WebRTC, real-time communication  
3. **💾 I/O Optimization & Performance** (6 topics) - Async, buffer optimization
4. **🔒 Security & Transport Protocols** (8 topics) - TLS/SSL, VPN, TCP/UDP, Firewall
5. **📡 Network Protocol Implementation** (12 topics) - DNS, DHCP, Email, SNMP...
6. **🧵 Concurrent Programming & Multiplayer** (12 topics) - Multi-threading, game networking

### **Phân bố độ khó:**
- 🟢 **MODERATE**: 26 topics - Phù hợp đa số sinh viên
- 🟡 **CHALLENGING**: 22 topics - Cần kiến thức sâu hơn
- 🔴 **ADVANCED**: 8 topics - Research-oriented, công nghệ tiên tiến

## 💡 Một số đề tài nổi bật và thú vị:

### **Dễ làm + Demo ấn tượng:**
- **T33: Custom DNS Server** - Hiểu core internet infrastructure
- **T45: Multi-threading Web Server** - Essential cho mọi lập trình viên
- **T46: Producer-Consumer Pattern** - Pattern kinh điển
- **T11: SSE vs WebSocket** - So sánh rõ ràng, dễ demo

### **Thách thức + Có giá trị cao:**
- **T47-T48: Multiplayer Game Networking** - Rất thực tế, demo sinh động
- **T10: WebRTC P2P** - Công nghệ hot, ứng dụng video call
- **T13: gRPC Streaming** - Công nghệ microservices hiện đại
- **T28: TCP Congestion Control** - Hiểu sâu về transport layer

### **Advanced - Cho top students:**
- **T52: Actor Model (Erlang/Elixir)** - Distributed game systems
- **T14: WebTransport API** - Cutting-edge technology
- **T31: IPSec VPN** - Security implementation phức tạp

## 🎯 Bạn nên chọn dựa trên:

1. **Ngôn ngữ lập trình bạn giỏi nhất** (Python/Java/C++/Go/JavaScript?)
2. **Sở thích cá nhân** (Game? Web? Security? IoT?)
3. **Mục tiêu BTL** (Có thể mở rộng thành project lớn không?)
4. **Thời gian có** (48-67 giờ/topic theo tài liệu)

Bạn có hứng thú với hướng nào? Hoặc đã có ý tưởng sơ bộ chưa? Tôi có thể tư vấn cụ thể hơn! 😊

---

**User**

bây giờ tôi muốn làm về đề tài là đấu giá trực tuyến thì nó có liên quan tới lập trình mạng không ?

---

**Cursor**

## Câu trả lời: **CÓ - RẤT LIÊN QUAN!** 🎯

Đấu giá trực tuyến (Online Auction System) là một đề tài **XUẤT SẮC** cho lập trình mạng vì nó kết hợp nhiều khía cạnh network programming quan trọng:

## 🌐 Các vấn đề Lập trình mạng trong Đấu giá trực tuyến:

### **1. Real-time Communication (Quan trọng nhất!)**
```
Vấn đề: Khi ai đó đặt giá mới, TẤT CẢ người dùng phải thấy ngay lập tức
```
- **WebSocket** - Bidirectional real-time updates
- **Server-Sent Events (SSE)** - Server push bid updates to clients
- **Long Polling** - Fallback mechanism

→ **Liên quan trực tiếp đến T11, T04** trong danh sách

### **2. Concurrency & Race Conditions**
```
Vấn đề: 2 người đặt giá CÙNG LÚC - ai thắng? Làm sao tránh conflict?
```
- **Thread-safe bid processing**
- **Database locking mechanisms**
- **Atomic operations**

→ **Liên quan đến T45, T46, T49** (Multi-threading, Producer-Consumer, Lock-free)

### **3. Event-Driven Architecture**
```
Vấn đề: Xử lý nhiều events: New bid, Time countdown, Auto-close auction
```
- **Event loops**
- **Message queues**
- **Asynchronous processing**

→ **Liên quan đến T01, T19** (Event-driven, Async I/O)

### **4. Network Protocol Design**
```
Vấn đề: Định nghĩa message format giữa client-server
```
- Bid request/response format
- Update notification protocol
- Authentication & authorization

→ **Liên quan đến T06** (Custom Protocol Implementation)

### **5. State Synchronization**
```
Vấn đề: Đảm bảo tất cả clients thấy cùng 1 trạng thái đấu giá
```
- Current highest bid
- Remaining time
- Bidder information

→ **Tương tự game networking T47, T48**

### **6. Performance & Scalability**
```
Vấn đề: Hàng nghìn người xem đấu giá hot item cùng lúc
```
- Connection pooling
- Load balancing
- Caching strategies

→ **Liên quan đến T22, T23, T24** (Load Balancing, Connection Pooling)

## 📊 Kiến trúc Network cơ bản:

```
┌─────────────┐         WebSocket/SSE        ┌─────────────┐
│   Client 1  │◄──────────────────────────►│             │
└─────────────┘                              │             │
┌─────────────┐         Real-time           │   Server    │
│   Client 2  │◄──────────────────────────►│   (Node.js/ │
└─────────────┘         Updates             │   Python/   │
┌─────────────┐                              │   Go)       │
│   Client N  │◄──────────────────────────►│             │
└─────────────┘                              └──────┬──────┘
                                                    │
                                             ┌──────▼──────┐
                                             │  Database   │
                                             │  (Redis +   │
                                             │   PostgreSQL)│
                                             └─────────────┘
```

## ⚠️ Tuy nhiên - VẤN ĐỀ QUAN TRỌNG:

Nhìn vào file `demo.md`, **"Đấu giá trực tuyến" KHÔNG có trong 56 topics chính thức**. 

### **Bạn có 2 lựa chọn:**

### **Lựa chọn 1: Đề xuất topic mới (Rủi ro)**
- Hỏi thầy Hùng xem có nhận topic tự đề xuất không
- Giải thích các khía cạnh network programming trong đấu giá
- Có thể bị từ chối nếu thầy yêu cầu chọn trong 56 topics

### **Lựa chọn 2: Chọn topic liên quan và áp dụng vào đấu giá (An toàn hơn)**

Bạn có thể chọn những topics này và **demo bằng hệ thống đấu giá**:

#### **🔥 Lựa chọn tốt nhất:**

**T11: Server-Sent Events (SSE) vs WebSocket Performance** 🟢 MODERATE
- Demo: Hệ thống đấu giá real-time
- So sánh SSE vs WebSocket cho bid updates
- Vừa đúng topic, vừa làm được đấu giá!

**T46: Producer-Consumer Pattern cho Network Data Processing** 🟢 MODERATE
- Demo: Auction system với bid queue processing
- Producer: Users submitting bids
- Consumer: Server processing and validating bids

**T45: Multi-threading Patterns in Network Programming** 🟢 MODERATE
- Demo: Multi-threaded auction server
- Xử lý concurrent bidding
- Thread-safe bid processing

**T13: gRPC Streaming** 🟡 CHALLENGING
- Demo: Auction platform với bidirectional streaming
- Real-time bid updates qua gRPC streams
- Modern, professional approach

**T49: Lock-free Programming trong Network Applications** 🟢 MODERATE
- Demo: High-performance auction server
- Atomic bid operations without locks
- Showcase performance benefits

## 💡 Khuyến nghị của tôi:

**CHỌN T11 (SSE vs WebSocket)** và làm demo bằng đấu giá:

✅ **Lý do:**
1. Topic chính thức trong danh sách
2. MODERATE - không quá khó
3. Real-time là core của đấu giá
4. Demo rất trực quan, dễ thấy khác biệt
5. Có thể mở rộng thành BTL

✅ **Demo scenario:**
- So sánh performance khi 100+ users đấu giá cùng lúc
- SSE cho read-only viewers
- WebSocket cho active bidders
- Benchmark latency, resource usage

## ❓ Câu hỏi cho bạn:

1. **Thầy có cho phép tự đề xuất topic** hay BẮT BUỘC chọn trong 56 topics?
2. Bạn **giỏi ngôn ngữ nào** nhất? (Python/Java/JavaScript/Go?)
3. Muốn **demo đơn giản** hay **thách thức kỹ thuật cao**?

Nếu thầy bắt buộc chọn trong danh sách → Tôi khuyên **T11, T46, hoặc T45**  
Nếu được tự đề xuất → **Đấu giá trực tuyến** là đề tài rất hay!

Bạn nghĩ sao? 😊

```plaintext
Vấn đề: Khi ai đó đặt giá mới, TẤT CẢ người dùng phải thấy ngay lập tức
```

```plaintext
Vấn đề: 2 người đặt giá CÙNG LÚC - ai thắng? Làm sao tránh conflict?
```

```plaintext
Vấn đề: Xử lý nhiều events: New bid, Time countdown, Auto-close auction
```

```plaintext
Vấn đề: Định nghĩa message format giữa client-server
```

```plaintext
Vấn đề: Đảm bảo tất cả clients thấy cùng 1 trạng thái đấu giá
```

```plaintext
Vấn đề: Hàng nghìn người xem đấu giá hot item cùng lúc
```

```plaintext
┌─────────────┐         WebSocket/SSE        ┌─────────────┐
│   Client 1  │◄──────────────────────────►│             │
└─────────────┘                              │             │
┌─────────────┐         Real-time           │   Server    │
│   Client 2  │◄──────────────────────────►│   (Node.js/ │
└─────────────┘         Updates             │   Python/   │
┌─────────────┐                              │   Go)       │
│   Client N  │◄──────────────────────────►│             │
└─────────────┘                              └──────┬──────┘
                                                    │
                                             ┌──────▼──────┐
                                             │  Database   │
                                             │  (Redis +   │
                                             │   PostgreSQL)│
                                             └─────────────┘
```

---

**User**

topic ở file demo chỉ để tham khảo thôi ko cần phải ở trong đó, nên sử dụng ngôn ngữ gì để làm, phân biệt server với client như nào ? sử dụng java thì sao ? 1 bản demo đơn giản có những chức năng gì là đủ vì thời gian của tôi rất ngắn

---

**Cursor**

## Tuyệt! Vậy bạn tự do làm đề tài Đấu giá trực tuyến! 🎉

## 1️⃣ NGÔN NGỮ: JAVA - Lựa chọn XUẤT SẮC! ✅

### **Tại sao Java phù hợp:**
- ✅ **Socket API mạnh mẽ** - `java.net.Socket`, `ServerSocket`
- ✅ **Multi-threading đơn giản** - Built-in `Thread`, `ExecutorService`
- ✅ **Thư viện phong phú** - Swing/JavaFX cho GUI
- ✅ **Cross-platform** - Chạy được mọi nơi
- ✅ **Thread-safe collections** - `ConcurrentHashMap`, `CopyOnWriteArrayList`

### **Các lựa chọn khác (tham khảo):**
- **Python**: Nhanh nhất để prototype, nhưng GUI không đẹp bằng
- **JavaScript (Node.js + Web)**: Tốt nhất cho real-time, nhưng phức tạp hơn
- **Go**: Hiệu năng cao, nhưng ít người biết

→ **KẾT LUẬN: JAVA là lựa chọn cân bằng tốt nhất cho bạn!**

---

## 2️⃣ KIẾN TRÚC: PHÂN BIỆT SERVER VÀ CLIENT

```
┌─────────────────────────────────────────────────────────────┐
│                    SERVER (1 process)                       │
│  ┌────────────────────────────────────────────────────┐    │
│  │  AuctionServer.java                                │    │
│  │  - ServerSocket (port 8888)                        │    │
│  │  - Quản lý danh sách đấu giá                      │    │
│  │  - Xử lý bids từ nhiều clients                    │    │
│  │  - Broadcast updates đến tất cả clients           │    │
│  │  - Countdown timer cho auction                     │    │
│  └────────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────────┐    │
│  │  ClientHandler.java (Thread per client)           │    │
│  │  - Nhận bid từ 1 client                           │    │
│  │  - Gửi updates về cho client đó                   │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                            ▲ ▼ TCP Socket
              ┌─────────────┼─────────────┐
              │             │             │
┌─────────────▼──┐  ┌──────▼──────┐  ┌──▼──────────┐
│   CLIENT 1     │  │  CLIENT 2   │  │  CLIENT N   │
│ (Người đấu giá)│  │ (Người xem) │  │ (Người đấu) │
│                │  │             │  │             │
│ AuctionClient  │  │AuctionClient│  │AuctionClient│
│    .java       │  │   .java     │  │   .java     │
│  + GUI (Swing) │  │+ GUI (Swing)│  │+ GUI (Swing)│
│  - Xem items   │  │- Xem items  │  │- Xem items  │
│  - Đặt bid     │  │- Đặt bid    │  │- Đặt bid    │
│  - Nhận update │  │- Nhận update│  │- Nhận update│
└────────────────┘  └─────────────┘  └─────────────┘
```

### **Chi tiết:**

**SERVER (1 máy - chạy 1 lần):**
```
AuctionServer/
├── AuctionServer.java       // Main server, chấp nhận connections
├── ClientHandler.java       // Handle từng client (mỗi client 1 thread)
├── Auction.java            // Model: Thông tin đấu giá
├── Bid.java                // Model: Thông tin bid
└── User.java               // Model: Thông tin user
```

**CLIENT (Nhiều máy - mỗi người dùng chạy 1 instance):**
```
AuctionClient/
├── AuctionClient.java      // Kết nối đến server
├── ClientGUI.java          // Giao diện Swing
└── NetworkHandler.java     // Xử lý send/receive messages
```

---

## 3️⃣ DEMO ĐỐN GIẢN - CHỨC NĂNG TỐI THIỂU (Làm trong 2-3 ngày)

### **🎯 MỨC ĐỘ 1: CƠ BẢN NHẤT (Đủ để pass)**

#### **Server Side:**
1. ✅ **Khởi động server** trên port cố định (8888)
2. ✅ **Chấp nhận nhiều clients** kết nối (multi-threading)
3. ✅ **Quản lý 1 auction item** (tên, giá khởi điểm, thời gian)
4. ✅ **Nhận bid từ clients** và validate (bid > current price)
5. ✅ **Broadcast bid mới** đến TẤT CẢ clients đang kết nối
6. ✅ **Đếm ngược thời gian** (timer)
7. ✅ **Kết thúc đấu giá** khi hết giờ

#### **Client Side:**
1. ✅ **Kết nối đến server** (nhập IP + port)
2. ✅ **Nhập tên người dùng** (đăng ký đơn giản)
3. ✅ **Hiển thị thông tin auction**:
   - Tên sản phẩm
   - Giá hiện tại
   - Người đang dẫn đầu
   - Thời gian còn lại
4. ✅ **Đặt giá** (nhập số tiền, click "Bid")
5. ✅ **Nhận cập nhật real-time** khi có bid mới

#### **Demo scenario:**
```
1. Chạy Server
2. Chạy 2-3 Client instances (mở nhiều cửa sổ)
3. Các clients đặt giá xen kẽ
4. Thấy updates real-time trên tất cả clients
5. Hết giờ → Server announce người thắng
```

### **Protocol đơn giản (Text-based):**

```java
// Client → Server
"BID|username|amount"          // Đặt giá
"JOIN|username"                // Join auction

// Server → Client
"AUCTION_INFO|itemName|currentPrice|highestBidder|timeLeft"
"BID_UPDATE|username|newPrice" // Có bid mới
"AUCTION_END|winner|price"     // Kết thúc
```

---

## 4️⃣ ROADMAP THỰC HIỆN NHANH (3-5 ngày)

### **Ngày 1: Server Foundation**
- [ ] `AuctionServer.java` - ServerSocket, accept connections
- [ ] `ClientHandler.java` - Thread per client, echo message test
- [ ] Test: 2 clients kết nối, gửi text đơn giản

### **Ngày 2: Core Logic**
- [ ] `Auction.java` - Model với current price, bidder
- [ ] Server xử lý BID command
- [ ] Server broadcast đến tất cả clients
- [ ] Test: 2 clients đặt giá, thấy updates

### **Ngày 3: Client GUI**
- [ ] `ClientGUI.java` - Swing interface đơn giản:
  - JTextField cho bid amount
  - JButton "Place Bid"
  - JLabel hiển thị current price
  - JLabel hiển thị timer
- [ ] Test: GUI đẹp, functional

### **Ngày 4: Timer & Polish**
- [ ] Server countdown timer
- [ ] Auto-close auction khi hết giờ
- [ ] Announce winner
- [ ] Fix bugs, test kỹ

### **Ngày 5: Presentation**
- [ ] Chuẩn bị slides
- [ ] Practice demo
- [ ] Backup plan (video demo)

---

## 5️⃣ CODE SKELETON MẪU (Java)

### **Server - AuctionServer.java (Đơn giản nhất):**

```java
import java.io.*;
import java.net.*;
import java.util.*;

public class AuctionServer {
    private static final int PORT = 8888;
    private static List<ClientHandler> clients = new ArrayList<>();
    private static double currentPrice = 100.0;
    private static String highestBidder = "None";
    
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(PORT);
        System.out.println("Server started on port " + PORT);
        
        while (true) {
            Socket clientSocket = serverSocket.accept();
            ClientHandler handler = new ClientHandler(clientSocket);
            clients.add(handler);
            new Thread(handler).start();
        }
    }
    
    public static synchronized void broadcastBid(String bidder, double amount) {
        currentPrice = amount;
        highestBidder = bidder;
        String message = "BID_UPDATE|" + bidder + "|" + amount;
        
        for (ClientHandler client : clients) {
            client.sendMessage(message);
        }
    }
}
```

### **Client - AuctionClient.java (Đơn giản):**

```java
import java.io.*;
import java.net.*;

public class AuctionClient {
    private Socket socket;
    private PrintWriter out;
    private BufferedReader in;
    
    public void connect(String host, int port) throws IOException {
        socket = new Socket(host, port);
        out = new PrintWriter(socket.getOutputStream(), true);
        in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        
        // Thread nhận messages từ server
        new Thread(() -> {
            try {
                String message;
                while ((message = in.readLine()) != null) {
                    handleServerMessage(message);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }).start();
    }
    
    public void placeBid(String username, double amount) {
        out.println("BID|" + username + "|" + amount);
    }
    
    private void handleServerMessage(String message) {
        // Parse và update GUI
        System.out.println("Received: " + message);
    }
}
```

---

## 6️⃣ ĐIỂM NỔI BẬT VỀ LẬP TRÌNH MẠNG (Nêu trong presentation)

Khi thuyết trình, nhấn mạnh các khía cạnh network programming:

✅ **Socket Programming:**
- TCP connection giữa client-server
- `ServerSocket` accept multiple connections
- `Socket` send/receive data streams

✅ **Multi-threading:**
- Thread per client (ClientHandler)
- Synchronization cho shared data (currentPrice)
- Thread-safe broadcast

✅ **Protocol Design:**
- Custom text-based protocol
- Message format: `COMMAND|param1|param2`
- Error handling

✅ **Real-time Communication:**
- Push-based updates (server → clients)
- Low latency requirements
- State synchronization

✅ **Concurrency Issues:**
- Race condition khi 2 người bid cùng lúc
- Giải pháp: `synchronized` methods
- Atomic operations

---

## ❓ Câu hỏi cuối:

1. **Bạn có bao nhiêu ngày** để hoàn thành?
2. **Có kinh nghiệm Java Swing** chưa? (Nếu chưa → có thể dùng Console đơn giản hơn)
3. **Muốn focus vào đâu**: GUI đẹp hay Logic phức tạp?

Nếu thời gian RẤT ngắn (< 3 ngày):
→ **Bỏ GUI, dùng Console** cho client
→ Focus vào **network logic** (socket, threading, protocol)

Bạn cần tôi cung cấp **full source code skeleton** để bắt đầu nhanh không? 😊

```plaintext
┌─────────────────────────────────────────────────────────────┐
│                    SERVER (1 process)                       │
│  ┌────────────────────────────────────────────────────┐    │
│  │  AuctionServer.java                                │    │
│  │  - ServerSocket (port 8888)                        │    │
│  │  - Quản lý danh sách đấu giá                      │    │
│  │  - Xử lý bids từ nhiều clients                    │    │
│  │  - Broadcast updates đến tất cả clients           │    │
│  │  - Countdown timer cho auction                     │    │
│  └────────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────────┐    │
│  │  ClientHandler.java (Thread per client)           │    │
│  │  - Nhận bid từ 1 client                           │    │
│  │  - Gửi updates về cho client đó                   │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                            ▲ ▼ TCP Socket
              ┌─────────────┼─────────────┐
              │             │             │
┌─────────────▼──┐  ┌──────▼──────┐  ┌──▼──────────┐
│   CLIENT 1     │  │  CLIENT 2   │  │  CLIENT N   │
│ (Người đấu giá)│  │ (Người xem) │  │ (Người đấu) │
│                │  │             │  │             │
│ AuctionClient  │  │AuctionClient│  │AuctionClient│
│    .java       │  │   .java     │  │   .java     │
│  + GUI (Swing) │  │+ GUI (Swing)│  │+ GUI (Swing)│
│  - Xem items   │  │- Xem items  │  │- Xem items  │
│  - Đặt bid     │  │- Đặt bid    │  │- Đặt bid    │
│  - Nhận update │  │- Nhận update│  │- Nhận update│
└────────────────┘  └─────────────┘  └─────────────┘
```

```plaintext
AuctionServer/
├── AuctionServer.java       // Main server, chấp nhận connections
├── ClientHandler.java       // Handle từng client (mỗi client 1 thread)
├── Auction.java            // Model: Thông tin đấu giá
├── Bid.java                // Model: Thông tin bid
└── User.java               // Model: Thông tin user
```

```plaintext
AuctionClient/
├── AuctionClient.java      // Kết nối đến server
├── ClientGUI.java          // Giao diện Swing
└── NetworkHandler.java     // Xử lý send/receive messages
```

```plaintext
1. Chạy Server
2. Chạy 2-3 Client instances (mở nhiều cửa sổ)
3. Các clients đặt giá xen kẽ
4. Thấy updates real-time trên tất cả clients
5. Hết giờ → Server announce người thắng
```

```java
// Client → Server
"BID|username|amount"          // Đặt giá
"JOIN|username"                // Join auction

// Server → Client
"AUCTION_INFO|itemName|currentPrice|highestBidder|timeLeft"
"BID_UPDATE|username|newPrice" // Có bid mới
"AUCTION_END|winner|price"     // Kết thúc
```

```java
import java.io.*;
import java.net.*;
import java.util.*;

public class AuctionServer {
    private static final int PORT = 8888;
    private static List<ClientHandler> clients = new ArrayList<>();
    private static double currentPrice = 100.0;
    private static String highestBidder = "None";
    
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(PORT);
        System.out.println("Server started on port " + PORT);
        
        while (true) {
            Socket clientSocket = serverSocket.accept();
            ClientHandler handler = new ClientHandler(clientSocket);
            clients.add(handler);
            new Thread(handler).start();
        }
    }
    
    public static synchronized void broadcastBid(String bidder, double amount) {
        currentPrice = amount;
        highestBidder = bidder;
        String message = "BID_UPDATE|" + bidder + "|" + amount;
        
        for (ClientHandler client : clients) {
            client.sendMessage(message);
        }
    }
}
```

```java
import java.io.*;
import java.net.*;

public class AuctionClient {
    private Socket socket;
    private PrintWriter out;
    private BufferedReader in;
    
    public void connect(String host, int port) throws IOException {
        socket = new Socket(host, port);
        out = new PrintWriter(socket.getOutputStream(), true);
        in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        
        // Thread nhận messages từ server
        new Thread(() -> {
            try {
                String message;
                while ((message = in.readLine()) != null) {
                    handleServerMessage(message);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }).start();
    }
    
    public void placeBid(String username, double amount) {
        out.println("BID|" + username + "|" + amount);
    }
    
    private void handleServerMessage(String message) {
        // Parse và update GUI
        System.out.println("Received: " + message);
    }
}
```

---

**User**

liệt kê cho tôi các mức độ và các chức năng

---

**Cursor**

# 📊 CÁC MỨC ĐỘ & CHỨC NĂNG - HỆ THỐNG ĐẤU GIÁ TRỰC TUYẾN

---

## 🟢 MỨC 1: CƠ BẢN - ĐỦ ĐỂ PASS (2-3 ngày)

**⏰ Thời gian:** 2-3 ngày  
**💯 Điểm dự kiến:** 6.5-7.5/10  
**🎯 Phù hợp:** Thời gian ngắn, chưa có kinh nghiệm nhiều

### **CHỨC NĂNG SERVER:**
1. ✅ Khởi động server trên port cố định (VD: 8888)
2. ✅ Chấp nhận nhiều clients kết nối đồng thời (multi-threading)
3. ✅ Quản lý **1 auction item duy nhất** (hard-code):
   - Tên sản phẩm
   - Giá khởi điểm
   - Thời gian đấu giá (VD: 2 phút)
4. ✅ Nhận bid từ clients
5. ✅ Validate bid (phải lớn hơn giá hiện tại)
6. ✅ Cập nhật giá cao nhất và người bid
7. ✅ **Broadcast** giá mới đến TẤT CẢ clients
8. ✅ Countdown timer tự động
9. ✅ Kết thúc đấu giá khi hết giờ, thông báo người thắng

### **CHỨC NĂNG CLIENT:**
1. ✅ Kết nối đến server (nhập IP + Port)
2. ✅ Đăng nhập bằng username (không cần password)
3. ✅ **Console-based UI** (text-based, không cần GUI):
   ```
   ========== AUCTION SYSTEM ==========
   Item: iPhone 15 Pro Max
   Current Price: $1,200
   Highest Bidder: Alice
   Time Left: 01:45
   
   Your username: Bob
   Enter bid amount (or 'exit'): _
   ```
4. ✅ Nhập số tiền để bid
5. ✅ Nhận thông báo real-time khi có bid mới
6. ✅ Hiển thị kết quả cuối cùng

### **NETWORK PROGRAMMING HIGHLIGHTS:**
- ✅ TCP Socket (Client-Server)
- ✅ Multi-threading (1 thread per client)
- ✅ Text-based Protocol
- ✅ Broadcast mechanism
- ✅ Synchronization (synchronized keyword)

### **DEMO SCENARIO:**
```
1. Chạy Server console
2. Chạy 3 Client consoles (3 terminal windows)
3. 3 users: Alice, Bob, Charlie đặt giá xen kẽ
4. Tất cả thấy updates real-time
5. Hết giờ → Server thông báo winner
```

---

## 🟡 MỨC 2: TRUNG BÌNH - ĐIỂM TỐT (4-5 ngày)

**⏰ Thời gian:** 4-5 ngày  
**💯 Điểm dự kiến:** 7.5-8.5/10  
**🎯 Phù hợp:** Có thời gian hợp lý, muốn điểm tốt

### **CHỨC NĂNG SERVER (Thêm vào Mức 1):**
10. ✅ **Nhiều auction items** (quản lý danh sách đấu giá)
11. ✅ Client chọn item để tham gia
12. ✅ Mỗi auction có timer riêng
13. ✅ **Lưu trữ lịch sử bids** (in-memory)
14. ✅ Hiển thị danh sách tất cả auctions đang active
15. ✅ **Auto-extend time** nếu có bid trong 10s cuối (chống snipe)
16. ✅ Xử lý client disconnect gracefully
17. ✅ Logging: Ghi log tất cả activities vào file

### **CHỨC NĂNG CLIENT (Thêm vào Mức 1):**
7. ✅ **Java Swing GUI** (giao diện đồ họa):
   - JTable hiển thị danh sách auctions
   - JLabel hiển thị thông tin auction đang xem
   - JTextField nhập bid amount
   - JButton "Place Bid"
   - JProgressBar cho countdown timer
   - Color coding (green = winning, red = losing)
8. ✅ Xem danh sách tất cả auctions
9. ✅ Join/Leave auction rooms
10. ✅ Xem lịch sử 10 bids gần nhất
11. ✅ Notification khi bị outbid
12. ✅ Sound alert khi có bid mới (optional)

### **NETWORK PROGRAMMING HIGHLIGHTS (Thêm vào Mức 1):**
- ✅ Room management (multiple auction rooms)
- ✅ Connection lifecycle management
- ✅ Concurrent data structures (ConcurrentHashMap)
- ✅ Thread pools (ExecutorService)
- ✅ Error handling & recovery

### **PROTOCOL MỞ RỘNG:**
```java
// Client → Server
JOIN|username
LIST_AUCTIONS
JOIN_AUCTION|auctionId
BID|auctionId|amount
LEAVE_AUCTION|auctionId
GET_HISTORY|auctionId

// Server → Client
AUCTION_LIST|id1:name1:price1|id2:name2:price2...
AUCTION_INFO|id|name|currentPrice|bidder|timeLeft
BID_UPDATE|auctionId|username|newPrice
AUCTION_END|auctionId|winner|finalPrice
ERROR|message
OUTBID_ALERT|auctionId
```

### **DEMO SCENARIO:**
```
1. Server quản lý 3 auctions đồng thời
2. 5 clients connect
3. Clients chia nhau vào các auctions khác nhau
4. Demo auto-extend time
5. Demo multiple auctions kết thúc ở thời điểm khác nhau
6. Hiển thị GUI đẹp với Swing
```

---

## 🟠 MỨC 3: KHÁ - ĐIỂM CAO (6-7 ngày)

**⏰ Thời gian:** 6-7 ngày  
**💯 Điểm dự kiến:** 8.5-9.0/10  
**🎯 Phù hợp:** Muốn điểm cao, có kinh nghiệm Java

### **CHỨC NĂNG SERVER (Thêm vào Mức 2):**
18. ✅ **Authentication system** (username + password)
19. ✅ **Database integration** (SQLite hoặc MySQL):
    - User accounts
    - Auction items
    - Bid history
    - Transaction logs
20. ✅ **Admin functions**:
    - Tạo auction mới
    - Xóa/sửa auction
    - Ban user
    - View statistics
21. ✅ **Bid increment rules** (mỗi lần bid phải tăng tối thiểu X%)
22. ✅ **Reserve price** (giá dự trữ, dưới giá này không bán)
23. ✅ **Proxy bidding** (auto-bid lên đến max amount của user)
24. ✅ **Anti-snipe protection** (tự động extend nếu bid gần hết giờ)
25. ✅ Load balancing với thread pools
26. ✅ Performance monitoring (số clients, throughput)

### **CHỨC NĂNG CLIENT (Thêm vào Mức 2):**
13. ✅ **Registration/Login form**
14. ✅ **Multiple tabs**:
    - Tab "Active Auctions"
    - Tab "My Bids"
    - Tab "Won Items"
    - Tab "History"
15. ✅ **Advanced bidding**:
    - Set max auto-bid
    - Quick bid buttons (+$10, +$50, +$100)
16. ✅ **Real-time charts** (price history graph)
17. ✅ **User profile**:
    - View win rate
    - Total spent
    - Items won
18. ✅ **Filtering & Search**:
    - Filter by category
    - Search by name
    - Sort by price/time
19. ✅ **Watchlist** (theo dõi auctions quan tâm)
20. ✅ **Desktop notifications** (khi bị outbid)

### **NETWORK PROGRAMMING HIGHLIGHTS (Thêm vào Mức 2):**
- ✅ Stateful connections (session management)
- ✅ Encryption (basic SSL/TLS)
- ✅ Protocol versioning
- ✅ Heartbeat mechanism (detect dead connections)
- ✅ Message queuing (buffering)
- ✅ Rate limiting (chống spam)

### **DEMO SCENARIO:**
```
1. Demo login/register system
2. Admin tạo auction mới trong khi system đang chạy
3. 10+ clients đồng thời
4. Demo proxy bidding (Alice set max $500, system auto-bid for her)
5. Demo anti-snipe (bid trong 10s cuối → extend thêm 1 phút)
6. Show performance metrics (TPS, latency)
7. Demo database persistence (restart server, data vẫn còn)
```

---

## 🔴 MỨC 4: XUẤT SẮC - ĐIỂM CAO NHẤT (8-10 ngày)

**⏰ Thời gian:** 8-10 ngày  
**💯 Điểm dự kiến:** 9.0-10/10  
**🎯 Phù hợp:** Muốn làm project hoàn chỉnh, có thể dùng làm BTL

### **CHỨC NĂNG SERVER (Thêm vào Mức 3):**
27. ✅ **RESTful API** (Java Spring Boot):
    - Web-based admin dashboard
    - Mobile app support
28. ✅ **WebSocket support** (kết hợp với Socket):
    - Web clients có thể join
    - Browser-based bidding
29. ✅ **Distributed system** (optional):
    - Multiple servers với load balancer
    - Redis cho shared state
30. ✅ **Advanced features**:
    - English auction (ascending price)
    - Dutch auction (descending price)
    - Sealed-bid auction
31. ✅ **Payment integration simulation**:
    - Virtual wallet
    - Transaction processing
    - Escrow system
32. ✅ **Image upload** (auction items có ảnh)
33. ✅ **Email notifications** (win/lose notifications)
34. ✅ **Analytics dashboard**:
    - Real-time bidding charts
    - User behavior analytics
    - Revenue reports
35. ✅ **Security features**:
    - SSL/TLS encryption
    - Password hashing (BCrypt)
    - SQL injection prevention
    - Rate limiting & DDoS protection

### **CHỨC NĂNG CLIENT (Thêm vào Mức 3):**
21. ✅ **Web client** (HTML/CSS/JavaScript):
    - Responsive design
    - Real-time updates với WebSocket
22. ✅ **Mobile app** (Android - optional)
23. ✅ **Advanced UI/UX**:
    - Image carousel cho items
    - Live bid animation
    - Sound effects
    - Dark mode
24. ✅ **Social features**:
    - User ratings & reviews
    - Follow other bidders
    - Chat trong auction room
25. ✅ **Advanced analytics cho user**:
    - Bidding patterns
    - Success rate by category
    - Spending reports

### **NETWORK PROGRAMMING HIGHLIGHTS (Thêm vào Mức 3):**
- ✅ Hybrid protocol (Socket + WebSocket + REST)
- ✅ Load balancing algorithms
- ✅ Caching strategies (Redis)
- ✅ CDN simulation (for images)
- ✅ Message compression (reduce bandwidth)
- ✅ Protocol optimization (binary protocol thay vì text)
- ✅ Scalability testing (handle 100+ concurrent users)
- ✅ Fault tolerance (server failover)

### **ARCHITECTURE:**
```
                     ┌──────────────┐
                     │ Load Balancer│
                     └───────┬──────┘
              ┌──────────────┼──────────────┐
              │              │              │
         ┌────▼────┐   ┌────▼────┐   ┌────▼────┐
         │Server 1 │   │Server 2 │   │Server 3 │
         └────┬────┘   └────┬────┘   └────┬────┘
              └──────────────┼──────────────┘
                        ┌────▼────┐
                        │  Redis  │ (Shared State)
                        └────┬────┘
                        ┌────▼────┐
                        │Database │
                        └─────────┘
```

### **DEMO SCENARIO:**
```
1. Web dashboard hiển thị real-time stats
2. Desktop client + Web client cùng bidding
3. Demo với 20+ concurrent users (script automation)
4. Admin tạo auction, upload ảnh, set reserve price
5. Demo payment flow (wallet deposit → bid → win → payment)
6. Demo different auction types (English/Dutch/Sealed)
7. Performance benchmark: Latency < 50ms, Throughput > 1000 bids/s
8. Demo failover (kill server 1, clients auto-reconnect to server 2)
```

---

## 📋 BẢNG SO SÁNH NHANH

| Tính năng | Mức 1 🟢 | Mức 2 🟡 | Mức 3 🟠 | Mức 4 🔴 |
|-----------|---------|---------|---------|---------|
| **Thời gian** | 2-3 ngày | 4-5 ngày | 6-7 ngày | 8-10 ngày |
| **Điểm dự kiến** | 6.5-7.5 | 7.5-8.5 | 8.5-9.0 | 9.0-10 |
| **UI** | Console | Swing GUI | Swing + Charts | Web + Mobile |
| **Auctions** | 1 item | Nhiều items | + Database | + Categories |
| **Users** | Username only | Username | Login/Register | + Authentication |
| **Database** | ❌ | ❌ | ✅ SQLite/MySQL | ✅ + Redis |
| **Protocol** | Text-based | Text-based | + Heartbeat | Binary/WebSocket |
| **Threading** | Basic | Thread Pool | Advanced | Distributed |
| **Security** | ❌ | Basic | ✅ SSL | ✅ Full Security |
| **Admin** | ❌ | ❌ | ✅ Console | ✅ Web Dashboard |
| **Features** | 9 | 20 | 26 | 35+ |

---

## 💡 KHUYẾN NGHỊ THEO THỜI GIAN

### **Nếu bạn có < 3 ngày:**
→ **CHỌN MỨC 1** - Console-based, đủ để pass

### **Nếu bạn có 4-5 ngày:**
→ **CHỌN MỨC 2** - Swing GUI, điểm tốt, cân bằng

### **Nếu bạn có 6-7 ngày:**
→ **CHỌN MỨC 3** - Full-featured, điểm cao

### **Nếu bạn có > 8 ngày + muốn làm BTL:**
→ **CHỌN MỨC 4** - Production-ready system

---

## 🎯 ĐIỂM NETWORK PROGRAMMING QUAN TRỌNG (Cho presentation)

**PHẢI NÊU RÕ trong slides:**

### **1. Socket Programming ⭐⭐⭐**
- TCP vs UDP (tại sao chọn TCP)
- Client-Server architecture
- Connection management

### **2. Multi-threading ⭐⭐⭐**
- Thread per client
- Synchronization issues
- Thread-safe collections

### **3. Protocol Design ⭐⭐⭐**
- Custom text/binary protocol
- Message format
- Error handling

### **4. Real-time Communication ⭐⭐**
- Push notifications
- Broadcast mechanism
- Low latency

### **5. Concurrency Control ⭐⭐**
- Race conditions (2 bids cùng lúc)
- `synchronized` methods
- Atomic operations

### **6. Scalability ⭐**
- Thread pools
- Connection limits
- Performance metrics

---

## ❓ BẠN ĐANG Ở TÌNH HUỐNG NÀO?

**Hãy cho tôi biết:**
1. Bạn có **bao nhiêu ngày** thực tế?
2. Bạn **đã biết Java Swing** chưa?
3. Bạn muốn **điểm bao nhiêu** (pass là đủ hay muốn cao)?
4. Đây là **demo presentation only** hay sẽ làm **BTL luôn**?

→ Tôi sẽ tư vấn mức độ phù hợp + cung cấp code skeleton ngay! 😊

```plaintext
   ========== AUCTION SYSTEM ==========
   Item: iPhone 15 Pro Max
   Current Price: $1,200
   Highest Bidder: Alice
   Time Left: 01:45
   
   Your username: Bob
   Enter bid amount (or 'exit'): _
```

```plaintext
1. Chạy Server console
2. Chạy 3 Client consoles (3 terminal windows)
3. 3 users: Alice, Bob, Charlie đặt giá xen kẽ
4. Tất cả thấy updates real-time
5. Hết giờ → Server thông báo winner
```

```java
// Client → Server
JOIN|username
LIST_AUCTIONS
JOIN_AUCTION|auctionId
BID|auctionId|amount
LEAVE_AUCTION|auctionId
GET_HISTORY|auctionId

// Server → Client
AUCTION_LIST|id1:name1:price1|id2:name2:price2...
AUCTION_INFO|id|name|currentPrice|bidder|timeLeft
BID_UPDATE|auctionId|username|newPrice
AUCTION_END|auctionId|winner|finalPrice
ERROR|message
OUTBID_ALERT|auctionId
```

```plaintext
1. Server quản lý 3 auctions đồng thời
2. 5 clients connect
3. Clients chia nhau vào các auctions khác nhau
4. Demo auto-extend time
5. Demo multiple auctions kết thúc ở thời điểm khác nhau
6. Hiển thị GUI đẹp với Swing
```

```plaintext
1. Demo login/register system
2. Admin tạo auction mới trong khi system đang chạy
3. 10+ clients đồng thời
4. Demo proxy bidding (Alice set max $500, system auto-bid for her)
5. Demo anti-snipe (bid trong 10s cuối → extend thêm 1 phút)
6. Show performance metrics (TPS, latency)
7. Demo database persistence (restart server, data vẫn còn)
```

```plaintext
                     ┌──────────────┐
                     │ Load Balancer│
                     └───────┬──────┘
              ┌──────────────┼──────────────┐
              │              │              │
         ┌────▼────┐   ┌────▼────┐   ┌────▼────┐
         │Server 1 │   │Server 2 │   │Server 3 │
         └────┬────┘   └────┬────┘   └────┬────┘
              └──────────────┼──────────────┘
                        ┌────▼────┐
                        │  Redis  │ (Shared State)
                        └────┬────┘
                        ┌────▼────┐
                        │Database │
                        └─────────┘
```

```plaintext
1. Web dashboard hiển thị real-time stats
2. Desktop client + Web client cùng bidding
3. Demo với 20+ concurrent users (script automation)
4. Admin tạo auction, upload ảnh, set reserve price
5. Demo payment flow (wallet deposit → bid → win → payment)
6. Demo different auction types (English/Dutch/Sealed)
7. Performance benchmark: Latency < 50ms, Throughput > 1000 bids/s
8. Demo failover (kill server 1, clients auto-reconnect to server 2)
```

---

**User**

mô tả lại bằng tiếng việt đọc cho dễ hiểu, 

---

**Cursor**

# 📊 CÁC MỨC ĐỘ & CHỨC NĂNG - HỆ THỐNG ĐẤU GIÁ TRỰC TUYẾN

---

## 🟢 MỨC 1: CƠ BẢN - ĐỦ ĐỂ QUA MÔN (2-3 ngày)

**⏰ Thời gian làm:** 2-3 ngày  
**💯 Điểm ước tính:** 6.5-7.5/10  
**🎯 Phù hợp cho:** Bạn không có nhiều thời gian, chưa có kinh nghiệm lắm

### **PHÍA SERVER (Máy chủ):**

1. ✅ **Khởi động server** - Mở server trên cổng 8888
2. ✅ **Cho nhiều người kết nối cùng lúc** - Dùng đa luồng (multi-threading)
3. ✅ **Quản lý 1 món đồ đấu giá** - Ví dụ: iPhone 15 Pro Max, giá khởi điểm 20 triệu, thời gian đấu giá 3 phút
4. ✅ **Nhận giá đặt từ người dùng** - Client gửi giá lên server
5. ✅ **Kiểm tra giá hợp lệ** - Giá mới phải cao hơn giá hiện tại
6. ✅ **Cập nhật giá cao nhất** - Lưu người đặt giá và số tiền
7. ✅ **Gửi thông báo cho tất cả mọi người** - Khi có giá mới, tất cả clients đều nhận được
8. ✅ **Đếm ngược thời gian** - Timer tự động chạy
9. ✅ **Kết thúc đấu giá** - Hết giờ thì thông báo ai thắng

### **PHÍA CLIENT (Người dùng):**

1. ✅ **Kết nối vào server** - Nhập địa chỉ IP và cổng 8888
2. ✅ **Đăng nhập đơn giản** - Chỉ cần nhập tên (không cần mật khẩu)
3. ✅ **Giao diện dạng text** - Không có giao diện đồ họa, chỉ hiển thị chữ:
   ```
   ========== HỆ THỐNG ĐẤU GIÁ ==========
   Sản phẩm: iPhone 15 Pro Max
   Giá hiện tại: 25,000,000 VNĐ
   Người đang thắng: Alice
   Thời gian còn lại: 01:45
   
   Tên của bạn: Bob
   Nhập giá muốn đặt (hoặc gõ 'exit' để thoát): _
   ```
4. ✅ **Đặt giá** - Gõ số tiền muốn đặt
5. ✅ **Nhận thông báo ngay lập tức** - Khi có người khác đặt giá, bạn thấy luôn
6. ✅ **Xem kết quả** - Hết giờ thì biết ai thắng

### **ĐIỂM MẠNH VỀ LẬP TRÌNH MẠNG:**
- ✅ Dùng Socket TCP để kết nối giữa máy khách và máy chủ
- ✅ Đa luồng - mỗi người dùng 1 luồng riêng
- ✅ Giao thức text đơn giản
- ✅ Cơ chế phát sóng (broadcast) - gửi tin cho tất cả mọi người
- ✅ Đồng bộ hóa dữ liệu - dùng từ khóa synchronized

### **CÁCH DEMO:**
```
Bước 1: Chạy chương trình Server (1 cửa sổ)
Bước 2: Chạy chương trình Client 3 lần (3 cửa sổ khác nhau)
Bước 3: 3 người Alice, Bob, Charlie lần lượt đặt giá
Bước 4: Tất cả đều thấy giá cập nhật ngay lập tức
Bước 5: Hết giờ → Server thông báo ai thắng
```

---

## 🟡 MỨC 2: TRUNG BÌNH - ĐIỂM TỐT (4-5 ngày)

**⏰ Thời gian làm:** 4-5 ngày  
**💯 Điểm ước tính:** 7.5-8.5/10  
**🎯 Phù hợp cho:** Bạn có thời gian vừa phải, muốn được điểm tốt

### **PHÍA SERVER (Thêm vào những chức năng của Mức 1):**

10. ✅ **Nhiều món đồ để đấu giá** - Không chỉ 1 món, có thể 5-10 món
11. ✅ **Người dùng chọn món muốn đấu** - Như vào các phòng khác nhau
12. ✅ **Mỗi món có đồng hồ riêng** - Món này đấu 3 phút, món kia đấu 5 phút
13. ✅ **Lưu lịch sử đặt giá** - Ai đặt giá bao nhiêu, lúc nào
14. ✅ **Hiển thị danh sách các phiên đấu giá** - Người dùng xem có những món gì
15. ✅ **Tự động gia hạn thời gian** - Nếu có người đặt giá trong 10 giây cuối, tự động thêm 1 phút (chống "giật giây cuối")
16. ✅ **Xử lý khi người dùng thoát đột ngột** - Không bị crash
17. ✅ **Ghi log** - Lưu tất cả hoạt động vào file để kiểm tra sau

### **PHÍA CLIENT (Thêm vào những chức năng của Mức 1):**

7. ✅ **Có giao diện đồ họa** - Dùng Java Swing, đẹp hơn:
   - Bảng (Table) hiển thị danh sách các món đang đấu giá
   - Nhãn (Label) hiển thị thông tin món đang xem
   - Ô nhập liệu (TextField) để gõ giá
   - Nút bấm (Button) "Đặt giá"
   - Thanh tiến trình (ProgressBar) hiển thị thời gian còn lại
   - Đổi màu: Xanh = bạn đang thắng, Đỏ = bạn đang thua
8. ✅ **Xem tất cả các món đang đấu giá**
9. ✅ **Vào/ra phòng đấu giá** - Tự do chọn món muốn đấu
10. ✅ **Xem 10 lần đặt giá gần nhất**
11. ✅ **Thông báo khi bị đè giá** - Có người đặt giá cao hơn bạn
12. ✅ **Âm thanh cảnh báo** (tùy chọn) - Tiếng "ting" khi có giá mới

### **ĐIỂM MẠNH VỀ LẬP TRÌNH MẠNG (Thêm vào Mức 1):**
- ✅ Quản lý nhiều phòng (room management)
- ✅ Quản lý vòng đời kết nối
- ✅ Cấu trúc dữ liệu đồng thời (ConcurrentHashMap)
- ✅ Bộ quản lý luồng (Thread Pool)
- ✅ Xử lý lỗi và phục hồi

### **GIAO THỨC MỞ RỘNG:**
```
Client gửi đến Server:
- JOIN|Bob                    → Bob tham gia hệ thống
- LIST_AUCTIONS              → Xem danh sách đấu giá
- JOIN_AUCTION|1             → Vào phòng đấu giá số 1
- BID|1|25000000            → Đặt giá 25 triệu cho món số 1
- LEAVE_AUCTION|1            → Rời khỏi phòng số 1

Server gửi đến Client:
- AUCTION_LIST|1:iPhone:20tr|2:Laptop:15tr  → Danh sách các món
- AUCTION_INFO|1|iPhone|25tr|Alice|02:30    → Thông tin chi tiết
- BID_UPDATE|1|Bob|26tr                      → Có giá mới
- AUCTION_END|1|Alice|30tr                   → Kết thúc, Alice thắng
- ERROR|Giá quá thấp                         → Báo lỗi
```

### **CÁCH DEMO:**
```
Bước 1: Server quản lý 3 món đồ cùng lúc
Bước 2: 5 người kết nối vào
Bước 3: Người này đấu iPhone, người kia đấu Laptop
Bước 4: Demo tự động gia hạn thời gian
Bước 5: Nhiều món kết thúc ở thời điểm khác nhau
Bước 6: Giao diện đẹp, có màu sắc
```

---

## 🟠 MỨC 3: KHÁ - ĐIỂM CAO (6-7 ngày)

**⏰ Thời gian làm:** 6-7 ngày  
**💯 Điểm ước tính:** 8.5-9.0/10  
**🎯 Phù hợp cho:** Muốn điểm cao, có kinh nghiệm Java khá

### **PHÍA SERVER (Thêm vào những chức năng của Mức 2):**

18. ✅ **Hệ thống đăng nhập thật** - Có tên đăng nhập và mật khẩu
19. ✅ **Kết nối cơ sở dữ liệu** - Dùng SQLite hoặc MySQL để lưu:
    - Tài khoản người dùng
    - Các món đồ đấu giá
    - Lịch sử đặt giá
    - Nhật ký giao dịch
20. ✅ **Chức năng quản trị viên**:
    - Tạo phiên đấu giá mới
    - Xóa/sửa đấu giá
    - Cấm người dùng vi phạm
    - Xem thống kê
21. ✅ **Quy tắc tăng giá** - Mỗi lần đặt phải tăng tối thiểu 5% hoặc 1 triệu
22. ✅ **Giá dự trữ** - Giá bí mật, dưới mức này chủ hàng không bán
23. ✅ **Đặt giá tự động** - Bạn đặt giá tối đa 50 triệu, hệ thống tự đấu giá giúp bạn
24. ✅ **Chống giật giây cuối** - Có người đặt giá gần hết giờ thì tự động gia hạn
25. ✅ **Cân bằng tải** - Dùng Thread Pool để xử lý hiệu quả
26. ✅ **Theo dõi hiệu suất** - Số người online, tốc độ xử lý

### **PHÍA CLIENT (Thêm vào những chức năng của Mức 2):**

13. ✅ **Form đăng ký/đăng nhập đẹp**
14. ✅ **Nhiều tab khác nhau**:
    - Tab "Đang đấu giá" - Các món đang diễn ra
    - Tab "Tôi đã đấu" - Các món bạn đã tham gia
    - Tab "Tôi đã thắng" - Các món bạn thắng
    - Tab "Lịch sử" - Tất cả hoạt động
15. ✅ **Đấu giá nâng cao**:
    - Đặt giá tối đa để hệ thống tự đấu
    - Nút tăng nhanh (+500k, +1tr, +5tr)
16. ✅ **Biểu đồ theo thời gian thực** - Đồ thị giá tăng như thế nào
17. ✅ **Hồ sơ người dùng**:
    - Tỷ lệ thắng
    - Tổng tiền đã chi
    - Số món đã thắng
18. ✅ **Lọc và tìm kiếm**:
    - Lọc theo danh mục (Điện tử, Thời trang, Xe...)
    - Tìm kiếm theo tên
    - Sắp xếp theo giá/thời gian
19. ✅ **Danh sách theo dõi** - Đánh dấu món quan tâm để xem sau
20. ✅ **Thông báo trên màn hình** - Cửa sổ popup khi bị đè giá

### **ĐIỂM MẠNH VỀ LẬP TRÌNH MẠNG (Thêm vào Mức 2):**
- ✅ Kết nối có trạng thái (session)
- ✅ Mã hóa cơ bản (SSL/TLS)
- ✅ Phiên bản giao thức
- ✅ Cơ chế nhịp tim (heartbeat) - Phát hiện kết nối chết
- ✅ Hàng đợi tin nhắn (message queue)
- ✅ Giới hạn tốc độ (chống spam)

### **CÁCH DEMO:**
```
Bước 1: Demo đăng ký/đăng nhập
Bước 2: Quản trị viên tạo món đấu giá mới trong lúc hệ thống đang chạy
Bước 3: 10+ người cùng lúc
Bước 4: Demo đặt giá tự động (Alice đặt tối đa 50tr, hệ thống tự đấu giúp)
Bước 5: Demo chống giật giây cuối (đặt giá trong 10s cuối → gia hạn thêm)
Bước 6: Hiển thị thống kê hiệu suất (bao nhiêu giao dịch/giây)
Bước 7: Tắt server rồi bật lại, dữ liệu vẫn còn (nhờ database)
```

---

## 🔴 MỨC 4: XUẤT SẮC - ĐIỂM TỐI ĐA (8-10 ngày)

**⏰ Thời gian làm:** 8-10 ngày  
**💯 Điểm ước tính:** 9.0-10/10  
**🎯 Phù hợp cho:** Muốn làm project hoàn chỉnh, có thể làm luôn BTL cuối kỳ

### **PHÍA SERVER (Thêm vào những chức năng của Mức 3):**

27. ✅ **API REST** - Dùng Spring Boot, cho phép web và mobile kết nối
28. ✅ **Hỗ trợ WebSocket** - Người dùng có thể đấu giá từ trình duyệt web
29. ✅ **Hệ thống phân tán** (tùy chọn):
    - Nhiều servers chạy cùng lúc
    - Load balancer phân chia tải
    - Redis để chia sẻ dữ liệu
30. ✅ **Nhiều kiểu đấu giá**:
    - Đấu giá Anh (giá tăng dần) - Kiểu thông thường
    - Đấu giá Hà Lan (giá giảm dần) - Từ cao xuống thấp
    - Đấu giá kín (sealed-bid) - Đặt giá bí mật
31. ✅ **Mô phỏng thanh toán**:
    - Ví điện tử ảo
    - Xử lý giao dịch
    - Hệ thống ký quỹ
32. ✅ **Upload ảnh** - Món đấu giá có hình ảnh kèm theo
33. ✅ **Gửi email thông báo** - Email khi thắng/thua
34. ✅ **Bảng điều khiển phân tích**:
    - Biểu đồ đấu giá theo thời gian thực
    - Phân tích hành vi người dùng
    - Báo cáo doanh thu
35. ✅ **Bảo mật nâng cao**:
    - Mã hóa SSL/TLS
    - Hash mật khẩu (BCrypt)
    - Chống SQL injection
    - Giới hạn tốc độ & chống DDoS

### **PHÍA CLIENT (Thêm vào những chức năng của Mức 3):**

21. ✅ **Client web** - Chạy trên trình duyệt (HTML/CSS/JavaScript):
    - Thiết kế responsive (tự động co giãn)
    - Cập nhật thời gian thực qua WebSocket
22. ✅ **Ứng dụng di động** - Android (tùy chọn)
23. ✅ **Giao diện đẹp, hiện đại**:
    - Slideshow ảnh cho món đồ
    - Hiệu ứng động khi có giá mới
    - Âm thanh
    - Chế độ tối (dark mode)
24. ✅ **Tính năng xã hội**:
    - Đánh giá người dùng
    - Theo dõi người đấu giá khác
    - Chat trong phòng đấu giá
25. ✅ **Phân tích nâng cao cho người dùng**:
    - Thói quen đặt giá
    - Tỷ lệ thắng theo danh mục
    - Báo cáo chi tiêu

### **ĐIỂM MẠNH VỀ LẬP TRÌNH MẠNG (Thêm vào Mức 3):**
- ✅ Giao thức kết hợp (Socket + WebSocket + REST)
- ✅ Thuật toán cân bằng tải
- ✅ Chiến lược cache (Redis)
- ✅ Mô phỏng CDN (cho hình ảnh)
- ✅ Nén tin nhắn (giảm băng thông)
- ✅ Tối ưu giao thức (binary thay vì text)
- ✅ Kiểm tra khả năng mở rộng (xử lý 100+ người cùng lúc)
- ✅ Chịu lỗi (server failover)

### **KIẾN TRÚC HỆ THỐNG:**
```
                  ┌──────────────────┐
                  │ Bộ cân bằng tải  │
                  └────────┬─────────┘
          ┌───────────────┼───────────────┐
          │               │               │
     ┌────▼────┐     ┌────▼────┐     ┌───▼─────┐
     │Server 1 │     │Server 2 │     │Server 3 │
     └────┬────┘     └────┬────┘     └────┬────┘
          └───────────────┼───────────────┘
                     ┌────▼────┐
                     │  Redis  │ (Chia sẻ dữ liệu)
                     └────┬────┘
                     ┌────▼────┐
                     │Database │
                     └─────────┘
```

### **CÁCH DEMO:**
```
Bước 1: Web dashboard hiển thị thống kê thời gian thực
Bước 2: Client desktop + Client web cùng đấu giá
Bước 3: Demo với 20+ người cùng lúc (dùng script tự động)
Bước 4: Admin tạo đấu giá, upload ảnh, đặt giá dự trữ
Bước 5: Demo quy trình thanh toán (nạp tiền → đấu giá → thắng → thanh toán)
Bước 6: Demo các kiểu đấu giá khác nhau (Anh/Hà Lan/Kín)
Bước 7: Kiểm tra hiệu suất: Độ trễ < 50ms, Xử lý > 1000 lượt đấu/giây
Bước 8: Demo chịu lỗi (tắt server 1, clients tự động kết nối sang server 2)
```

---

## 📋 BẢNG SO SÁNH NHANH

| Tính năng | Mức 1 🟢 | Mức 2 🟡 | Mức 3 🟠 | Mức 4 🔴 |
|-----------|---------|---------|---------|---------|
| **Thời gian** | 2-3 ngày | 4-5 ngày | 6-7 ngày | 8-10 ngày |
| **Điểm dự kiến** | 6.5-7.5 | 7.5-8.5 | 8.5-9.0 | 9.0-10 |
| **Giao diện** | Text (Console) | Đồ họa Swing | Swing + Biểu đồ | Web + Di động |
| **Số món đấu** | 1 món | Nhiều món | + Cơ sở dữ liệu | + Phân loại |
| **Người dùng** | Chỉ tên | Chỉ tên | Đăng ký/Đăng nhập | + Bảo mật |
| **Database** | ❌ Không | ❌ Không | ✅ SQLite/MySQL | ✅ + Redis |
| **Giao thức** | Text đơn giản | Text đơn giản | + Nhịp tim | Binary/WebSocket |
| **Đa luồng** | Cơ bản | Thread Pool | Nâng cao | Phân tán |
| **Bảo mật** | ❌ Không | Cơ bản | ✅ SSL | ✅ Đầy đủ |
| **Quản trị** | ❌ Không | ❌ Không | ✅ Console | ✅ Web |
| **Chức năng** | 9 | 20 | 26 | 35+ |

---

## 💡 GỢI Ý CHỌN MỨC ĐỘ

### **Nếu bạn có ÍT HƠN 3 ngày:**
→ **CHỌN MỨC 1** - Giao diện text, đủ để qua môn

### **Nếu bạn có 4-5 ngày:**
→ **CHỌN MỨC 2** - Có giao diện đồ họa, điểm tốt, cân bằng nhất

### **Nếu bạn có 6-7 ngày:**
→ **CHỌN MỨC 3** - Đầy đủ chức năng, điểm cao

### **Nếu bạn có TRÊN 8 ngày + muốn làm luôn BTL:**
→ **CHỌN MỨC 4** - Hệ thống chuyên nghiệp

---

## 🎯 CÁC ĐIỂM QUAN TRỌNG VỀ LẬP TRÌNH MẠNG (Phải nói khi thuyết trình)

### **1. Lập trình Socket ⭐⭐⭐ (Rất quan trọng)**
- TCP và UDP khác nhau thế nào (và tại sao chọn TCP)
- Kiến trúc Client-Server
- Quản lý kết nối

### **2. Đa luồng ⭐⭐⭐ (Rất quan trọng)**
- Mỗi client 1 luồng riêng
- Vấn đề đồng bộ hóa
- Cấu trúc dữ liệu thread-safe

### **3. Thiết kế giao thức ⭐⭐⭐ (Rất quan trọng)**
- Giao thức text/binary tự thiết kế
- Định dạng tin nhắn
- Xử lý lỗi

### **4. Giao tiếp thời gian thực ⭐⭐ (Quan trọng)**
- Thông báo đẩy (push notification)
- Cơ chế phát sóng (broadcast)
- Độ trễ thấp

### **5. Kiểm soát đồng thời ⭐⭐ (Quan trọng)**
- Race condition (2 người đặt giá cùng lúc)
- Phương thức `synchronized`
- Thao tác nguyên tử

### **6. Khả năng mở rộng ⭐ (Tùy chọn)**
- Thread pools
- Giới hạn kết nối
- Đo hiệu suất

---

## ❓ HÃY CHO TÔI BIẾT:

1. Bạn có **bao nhiêu ngày thực tế** để làm?
2. Bạn **đã biết Java Swing** chưa? (Làm giao diện đồ họa)
3. Bạn muốn **điểm bao nhiêu**? (Qua môn 6.5 hay muốn 9 điểm?)
4. Đây chỉ là **demo thuyết trình** hay sẽ làm **BTL cuối kỳ** luôn?

→ Tôi sẽ tư vấn cụ thể mức độ phù hợp + cung cấp code mẫu để bạn bắt đầu nhanh! 😊

```plaintext
   ========== HỆ THỐNG ĐẤU GIÁ ==========
   Sản phẩm: iPhone 15 Pro Max
   Giá hiện tại: 25,000,000 VNĐ
   Người đang thắng: Alice
   Thời gian còn lại: 01:45
   
   Tên của bạn: Bob
   Nhập giá muốn đặt (hoặc gõ 'exit' để thoát): _
```

```plaintext
Bước 1: Chạy chương trình Server (1 cửa sổ)
Bước 2: Chạy chương trình Client 3 lần (3 cửa sổ khác nhau)
Bước 3: 3 người Alice, Bob, Charlie lần lượt đặt giá
Bước 4: Tất cả đều thấy giá cập nhật ngay lập tức
Bước 5: Hết giờ → Server thông báo ai thắng
```

```plaintext
Client gửi đến Server:
- JOIN|Bob                    → Bob tham gia hệ thống
- LIST_AUCTIONS              → Xem danh sách đấu giá
- JOIN_AUCTION|1             → Vào phòng đấu giá số 1
- BID|1|25000000            → Đặt giá 25 triệu cho món số 1
- LEAVE_AUCTION|1            → Rời khỏi phòng số 1

Server gửi đến Client:
- AUCTION_LIST|1:iPhone:20tr|2:Laptop:15tr  → Danh sách các món
- AUCTION_INFO|1|iPhone|25tr|Alice|02:30    → Thông tin chi tiết
- BID_UPDATE|1|Bob|26tr                      → Có giá mới
- AUCTION_END|1|Alice|30tr                   → Kết thúc, Alice thắng
- ERROR|Giá quá thấp                         → Báo lỗi
```

```plaintext
Bước 1: Server quản lý 3 món đồ cùng lúc
Bước 2: 5 người kết nối vào
Bước 3: Người này đấu iPhone, người kia đấu Laptop
Bước 4: Demo tự động gia hạn thời gian
Bước 5: Nhiều món kết thúc ở thời điểm khác nhau
Bước 6: Giao diện đẹp, có màu sắc
```

```plaintext
Bước 1: Demo đăng ký/đăng nhập
Bước 2: Quản trị viên tạo món đấu giá mới trong lúc hệ thống đang chạy
Bước 3: 10+ người cùng lúc
Bước 4: Demo đặt giá tự động (Alice đặt tối đa 50tr, hệ thống tự đấu giúp)
Bước 5: Demo chống giật giây cuối (đặt giá trong 10s cuối → gia hạn thêm)
Bước 6: Hiển thị thống kê hiệu suất (bao nhiêu giao dịch/giây)
Bước 7: Tắt server rồi bật lại, dữ liệu vẫn còn (nhờ database)
```

```plaintext
                  ┌──────────────────┐
                  │ Bộ cân bằng tải  │
                  └────────┬─────────┘
          ┌───────────────┼───────────────┐
          │               │               │
     ┌────▼────┐     ┌────▼────┐     ┌───▼─────┐
     │Server 1 │     │Server 2 │     │Server 3 │
     └────┬────┘     └────┬────┘     └────┬────┘
          └───────────────┼───────────────┘
                     ┌────▼────┐
                     │  Redis  │ (Chia sẻ dữ liệu)
                     └────┬────┘
                     ┌────▼────┐
                     │Database │
                     └─────────┘
```

```plaintext
Bước 1: Web dashboard hiển thị thống kê thời gian thực
Bước 2: Client desktop + Client web cùng đấu giá
Bước 3: Demo với 20+ người cùng lúc (dùng script tự động)
Bước 4: Admin tạo đấu giá, upload ảnh, đặt giá dự trữ
Bước 5: Demo quy trình thanh toán (nạp tiền → đấu giá → thắng → thanh toán)
Bước 6: Demo các kiểu đấu giá khác nhau (Anh/Hà Lan/Kín)
Bước 7: Kiểm tra hiệu suất: Độ trễ < 50ms, Xử lý > 1000 lượt đấu/giây
Bước 8: Demo chịu lỗi (tắt server 1, clients tự động kết nối sang server 2)
```

---

**User**

tôi nghĩ tôi sẽ chọn mức 3, chúng ta nói về các công nghệ và giao thức sẽ sử dụng nhé

---

**Cursor**

# 🛠️ CÔNG NGHỆ & GIAO THỨC - MỨC 3 (HỆ THỐNG ĐẤU GIÁ)

---

## 1️⃣ CÔNG NGHỆ SỬ DỤNG

### **A. NGÔN NGỮ LẬP TRÌNH**

#### **Java (Core Technology)**
- **Phiên bản:** Java 11 trở lên (khuyến nghị Java 17)
- **Lý do chọn:**
  - ✅ Socket API mạnh mẽ, ổn định
  - ✅ Multi-threading tích hợp sẵn
  - ✅ Thư viện GUI (Swing) hoàn chỉnh
  - ✅ JDBC cho database
  - ✅ Cross-platform (chạy được Windows/Mac/Linux)

---

### **B. CÔNG NGHỆ SERVER**

#### **1. Socket Programming - TCP/IP**
```
📦 Package: java.net
- ServerSocket: Lắng nghe kết nối từ clients
- Socket: Kết nối giữa client và server
- InputStream/OutputStream: Truyền dữ liệu
```

**Chi tiết kỹ thuật:**
- **Giao thức:** TCP (Transmission Control Protocol)
- **Lý do không dùng UDP:** 
  - TCP đảm bảo dữ liệu đến đầy đủ, đúng thứ tự
  - Quan trọng cho đấu giá (không thể mất bid)
  - Có cơ chế kiểm tra lỗi

**Cổng sử dụng:**
```
Server Port: 8888 (hoặc tùy chọn)
Protocol: TCP/IP
Encoding: UTF-8
```

#### **2. Multi-threading**
```
📦 Package: java.util.concurrent
- ExecutorService: Quản lý thread pool
- ThreadPoolExecutor: Xử lý nhiều clients đồng thời
- ScheduledExecutorService: Timer tự động cho countdown
```

**Mô hình threading:**
```
Thread chính (Main Thread)
├── Accept Thread: Chấp nhận kết nối mới
├── Thread Pool cho Clients (10-50 threads)
│   ├── ClientHandler Thread 1
│   ├── ClientHandler Thread 2
│   └── ClientHandler Thread N
└── Timer Thread Pool
    ├── Auction Timer 1
    ├── Auction Timer 2
    └── Auction Timer N
```

#### **3. Synchronization (Đồng bộ hóa)**
```
📦 Package: java.util.concurrent
- ConcurrentHashMap: Map thread-safe
- CopyOnWriteArrayList: List thread-safe
- ReentrantLock: Khóa cho critical sections
- AtomicInteger/AtomicLong: Biến atomic
- synchronized keyword: Đồng bộ methods
```

**Ví dụ vấn đề cần giải quyết:**
```
Tình huống: Alice và Bob cùng đặt giá 25tr vào đúng 1 lúc

KHÔNG có synchronization:
├── Server nhận bid của Alice: 25tr ✅
├── Server nhận bid của Bob: 25tr ✅
└── ❌ KẾT QUẢ: Cả 2 đều được chấp nhận (SAI!)

CÓ synchronization:
├── Server lock → xử lý bid Alice: 25tr ✅
├── Server unlock
├── Server lock → xử lý bid Bob: 25tr ❌ (giá không cao hơn Alice)
└── ✅ KẾT QUẢ: Chỉ Alice thắng (ĐÚNG!)
```

---

### **C. CÔNG NGHỆ CLIENT**

#### **1. Java Swing (GUI)**
```
📦 Package: javax.swing
- JFrame: Cửa sổ chính
- JPanel: Container chứa components
- JTable: Hiển thị danh sách auctions
- JButton: Nút bấm
- JTextField: Nhập liệu
- JLabel: Hiển thị text
- JProgressBar: Thanh tiến trình (countdown)
- JTabbedPane: Nhiều tabs
- Timer: Cập nhật UI định kỳ
```

**Giao diện dự kiến:**
```
┌─────────────────────────────────────────────────────┐
│  AUCTION SYSTEM - User: Alice              [X]      │
├─────────────────────────────────────────────────────┤
│ [Đang đấu giá] [Tôi đã đấu] [Đã thắng] [Lịch sử]   │
├─────────────────────────────────────────────────────┤
│  ID │ Tên sản phẩm      │ Giá hiện tại │ Thời gian │
│  1  │ iPhone 15 Pro Max │ 25,000,000  │ 02:34     │
│  2  │ MacBook Pro M3    │ 35,000,000  │ 01:15     │
│  3  │ PS5 Pro           │ 12,500,000  │ 05:20     │
├─────────────────────────────────────────────────────┤
│ Chi tiết đấu giá:                                   │
│ ┌─────────────────────────────────────────────────┐ │
│ │ 📱 iPhone 15 Pro Max 256GB                      │ │
│ │ Giá khởi điểm: 20,000,000 VNĐ                  │ │
│ │ Giá hiện tại: 25,000,000 VNĐ                   │ │
│ │ Người dẫn đầu: Bob                              │ │
│ │ Thời gian: [████████░░] 02:34                  │ │
│ │                                                 │ │
│ │ Lịch sử đấu giá:                                │ │
│ │ • Bob     - 25,000,000 VNĐ  [02:35]            │ │
│ │ • Alice   - 24,000,000 VNĐ  [02:50]            │ │
│ │ • Charlie - 23,000,000 VNĐ  [03:10]            │ │
│ └─────────────────────────────────────────────────┘ │
│ Giá muốn đặt: [26000000    ] [Đặt giá]  [+1tr]     │
│                                          [+5tr]     │
└─────────────────────────────────────────────────────┘
```

#### **2. Networking trong Client**
```
📦 Package: java.net, java.io
- Socket: Kết nối đến server
- BufferedReader: Đọc dữ liệu từ server
- PrintWriter: Gửi dữ liệu đến server
- Thread riêng: Lắng nghe messages từ server
```

---

### **D. CƠ SỞ DỮ LIỆU**

#### **SQLite (Khuyến nghị cho Mức 3)**

**Lý do chọn SQLite:**
- ✅ Nhẹ, không cần cài đặt server riêng
- ✅ Dễ setup, chỉ cần 1 file .db
- ✅ Đủ cho demo và presentation
- ✅ Hỗ trợ SQL đầy đủ

**Thư viện:**
```
📦 SQLite JDBC Driver
- Artifact: org.xerial:sqlite-jdbc:3.44.1.0
- Download: https://github.com/xerial/sqlite-jdbc
```

**Alternative: MySQL** (nếu muốn professional hơn)
```
📦 MySQL Connector/J
- Artifact: mysql:mysql-connector-java:8.0.33
- Cần cài MySQL Server riêng
```

#### **Schema Database (Mức 3):**

```sql
-- Bảng Users (Người dùng)
CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100),
    balance DECIMAL(15,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT 1
);

-- Bảng Auctions (Các phiên đấu giá)
CREATE TABLE auctions (
    auction_id INTEGER PRIMARY KEY AUTOINCREMENT,
    item_name VARCHAR(200) NOT NULL,
    description TEXT,
    starting_price DECIMAL(15,2) NOT NULL,
    current_price DECIMAL(15,2) NOT NULL,
    reserve_price DECIMAL(15,2),  -- Giá dự trữ
    highest_bidder_id INTEGER,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    status VARCHAR(20) DEFAULT 'ACTIVE',  -- ACTIVE, ENDED, CANCELLED
    bid_increment DECIMAL(15,2) DEFAULT 500000,  -- Bước nhảy giá
    created_by INTEGER,
    FOREIGN KEY (highest_bidder_id) REFERENCES users(user_id),
    FOREIGN KEY (created_by) REFERENCES users(user_id)
);

-- Bảng Bids (Lịch sử đặt giá)
CREATE TABLE bids (
    bid_id INTEGER PRIMARY KEY AUTOINCREMENT,
    auction_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    bid_amount DECIMAL(15,2) NOT NULL,
    bid_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_auto_bid BOOLEAN DEFAULT 0,  -- Bid tự động hay không
    FOREIGN KEY (auction_id) REFERENCES auctions(auction_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Bảng Auto_Bids (Đấu giá tự động)
CREATE TABLE auto_bids (
    auto_bid_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    auction_id INTEGER NOT NULL,
    max_amount DECIMAL(15,2) NOT NULL,  -- Giá tối đa
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (auction_id) REFERENCES auctions(auction_id)
);

-- Bảng Watchlist (Theo dõi)
CREATE TABLE watchlist (
    watchlist_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    auction_id INTEGER NOT NULL,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (auction_id) REFERENCES auctions(auction_id)
);

-- Bảng Admin_Logs (Nhật ký quản trị)
CREATE TABLE admin_logs (
    log_id INTEGER PRIMARY KEY AUTOINCREMENT,
    admin_id INTEGER NOT NULL,
    action VARCHAR(100) NOT NULL,
    details TEXT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES users(user_id)
);
```

---

## 2️⃣ GIAO THỨC NETWORK (CUSTOM PROTOCOL)

### **A. THIẾT KẾ GIAO THỨC**

#### **Loại giao thức: Text-based Protocol over TCP**

**Format cơ bản:**
```
COMMAND|param1|param2|param3|...
```

**Lý do chọn text-based:**
- ✅ Dễ debug (có thể đọc được)
- ✅ Dễ implement
- ✅ Dễ mở rộng
- ✅ Đủ nhanh cho đấu giá (< 100ms latency)

**Alternative:** Binary protocol (nhanh hơn nhưng phức tạp hơn)

---

### **B. CÁC LOẠI MESSAGES**

#### **1. Authentication Messages (Xác thực)**

**Client → Server:**
```
REGISTER|username|password|email
LOGIN|username|password
LOGOUT
```

**Server → Client:**
```
AUTH_SUCCESS|user_id|username|balance
AUTH_FAILED|error_message
REGISTER_SUCCESS|user_id
REGISTER_FAILED|error_message
```

**Ví dụ thực tế:**
```
Client gửi: LOGIN|alice|mypassword123
Server trả:  AUTH_SUCCESS|101|alice|50000000.00
```

---

#### **2. Auction Listing Messages (Danh sách đấu giá)**

**Client → Server:**
```
LIST_AUCTIONS                    // Lấy tất cả
LIST_AUCTIONS|ACTIVE             // Chỉ đang diễn ra
LIST_AUCTIONS|MY_BIDS            // Những cái tôi đã đấu
LIST_AUCTIONS|SEARCH|keyword     // Tìm kiếm
```

**Server → Client:**
```
AUCTION_LIST|count|auction1_data|auction2_data|...

Format của auction_data:
id:name:currentPrice:highestBidder:timeLeft:status

Ví dụ:
AUCTION_LIST|3|1:iPhone:25000000:Bob:154:ACTIVE|2:MacBook:35000000:Alice:320:ACTIVE
```

---

#### **3. Auction Detail Messages (Chi tiết đấu giá)**

**Client → Server:**
```
GET_AUCTION|auction_id
JOIN_AUCTION|auction_id          // Tham gia xem đấu giá
LEAVE_AUCTION|auction_id         // Rời khỏi
GET_BID_HISTORY|auction_id|limit // Lấy lịch sử
```

**Server → Client:**
```
AUCTION_DETAIL|id|name|description|startPrice|currentPrice|reservePrice|highestBidder|startTime|endTime|timeLeft|bidIncrement|status

BID_HISTORY|count|bid1_data|bid2_data|...
Format: bidder:amount:timestamp

Ví dụ:
BID_HISTORY|3|Bob:25000000:2025-10-28T14:30:25|Alice:24000000:2025-10-28T14:29:10
```

---

#### **4. Bidding Messages (Đặt giá)**

**Client → Server:**
```
PLACE_BID|auction_id|amount
SET_AUTO_BID|auction_id|max_amount   // Đặt giá tự động
CANCEL_AUTO_BID|auction_id
```

**Server → Client:**
```
BID_SUCCESS|auction_id|new_price|your_rank
BID_FAILED|auction_id|reason

Reasons:
- PRICE_TOO_LOW: Giá thấp hơn giá hiện tại
- INSUFFICIENT_FUNDS: Không đủ tiền
- AUCTION_ENDED: Đấu giá đã kết thúc
- SELF_HIGHEST: Bạn đang dẫn đầu rồi
- INVALID_INCREMENT: Không đúng bước nhảy
```

---

#### **5. Real-time Update Messages (Cập nhật thời gian thực)**

**Server → All Clients in Auction:**
```
BID_UPDATE|auction_id|bidder_username|new_price|time_left
OUTBID_ALERT|auction_id|new_price|new_bidder
AUCTION_EXTENDED|auction_id|new_end_time|reason
AUCTION_ENDING_SOON|auction_id|seconds_left
AUCTION_ENDED|auction_id|winner_username|final_price|total_bids
TIME_TICK|auction_id|seconds_left
```

**Ví dụ flow:**
```
1. Bob đặt giá 25tr:
   Server → All: BID_UPDATE|1|Bob|25000000|145

2. Alice bị đè giá:
   Server → Alice: OUTBID_ALERT|1|25000000|Bob

3. Ai đó đặt giá trong 10s cuối:
   Server → All: AUCTION_EXTENDED|1|2025-10-28T15:05:00|LATE_BID

4. Đếm ngược:
   Server → All: TIME_TICK|1|30
   Server → All: TIME_TICK|1|29
   ...

5. Kết thúc:
   Server → All: AUCTION_ENDED|1|Bob|30000000|15
```

---

#### **6. Admin Messages (Quản trị)**

**Client → Server:**
```
ADMIN_CREATE_AUCTION|name|description|startPrice|reservePrice|durationMinutes|bidIncrement
ADMIN_DELETE_AUCTION|auction_id
ADMIN_BAN_USER|user_id|reason
ADMIN_GET_STATS
```

**Server → Client:**
```
ADMIN_SUCCESS|message
ADMIN_FAILED|reason
ADMIN_STATS|total_users|active_auctions|total_bids|total_revenue
```

---

#### **7. Watchlist Messages (Theo dõi)**

**Client → Server:**
```
ADD_WATCHLIST|auction_id
REMOVE_WATCHLIST|auction_id
GET_WATCHLIST
```

**Server → Client:**
```
WATCHLIST_UPDATED|auction_id|added_or_removed
WATCHLIST_ITEMS|count|auction1_id|auction2_id|...
WATCHLIST_ALERT|auction_id|event_type|details
```

---

#### **8. Error & System Messages**

**Server → Client:**
```
ERROR|error_code|error_message
PING                          // Heartbeat
PONG                          // Response
SERVER_SHUTDOWN|seconds       // Server sắp tắt
RECONNECT|new_server_address  // Chuyển server
```

**Client → Server:**
```
PONG
KEEPALIVE
```

---

### **C. HEARTBEAT MECHANISM (Cơ chế nhịp tim)**

**Mục đích:** Phát hiện kết nối chết (dead connection)

**Cơ chế:**
```
Mỗi 30 giây:
├── Server gửi: PING
├── Client phải trả lời trong 5s: PONG
└── Nếu không trả lời: Server ngắt kết nối
```

**Implementation:**
```java
// Server side
ScheduledExecutorService heartbeat = Executors.newScheduledThreadPool(1);
heartbeat.scheduleAtFixedRate(() -> {
    for (ClientHandler client : clients) {
        if (!client.isAlive()) {
            client.disconnect();
        } else {
            client.sendPing();
        }
    }
}, 0, 30, TimeUnit.SECONDS);
```

---

### **D. MESSAGE ENCODING & SECURITY**

#### **1. Encoding:**
```
Character Set: UTF-8
Line Terminator: \n (newline)
Delimiter: | (pipe)
```

#### **2. Escaping (Xử lý ký tự đặc biệt):**
```
Nếu data chứa |: thay bằng \|
Nếu data chứa \: thay bằng \\
Nếu data chứa \n: thay bằng \n
```

#### **3. Basic Security (Mức 3):**

**Mật khẩu:**
```java
// Không lưu plain text
// Dùng BCrypt hash
import org.mindrot.jbcrypt.BCrypt;

String hashed = BCrypt.hashpw(plainPassword, BCrypt.gensalt(12));
boolean match = BCrypt.checkpw(plainPassword, hashedPassword);
```

**SSL/TLS (Optional nhưng nên có):**
```java
// Dùng SSLSocket thay vì Socket thông thường
SSLSocketFactory factory = (SSLSocketFactory) SSLSocketFactory.getDefault();
SSLSocket sslSocket = (SSLSocket) factory.createSocket(host, port);
```

---

## 3️⃣ THƯ VIỆN & DEPENDENCIES

### **Maven Dependencies (pom.xml):**

```xml
<dependencies>
    <!-- SQLite JDBC Driver -->
    <dependency>
        <groupId>org.xerial</groupId>
        <artifactId>sqlite-jdbc</artifactId>
        <version>3.44.1.0</version>
    </dependency>
    
    <!-- BCrypt for password hashing -->
    <dependency>
        <groupId>org.mindrot</groupId>
        <artifactId>jbcrypt</artifactId>
        <version>0.4</version>
    </dependency>
    
    <!-- JSON parsing (optional, for config files) -->
    <dependency>
        <groupId>com.google.code.gson</groupId>
        <artifactId>gson</artifactId>
        <version>2.10.1</version>
    </dependency>
    
    <!-- Logging -->
    <dependency>
        <groupId>org.slf4j</groupId>
        <artifactId>slf4j-simple</artifactId>
        <version>2.0.9</version>
    </dependency>
    
    <!-- JFreeChart for graphs (optional) -->
    <dependency>
        <groupId>org.jfree</groupId>
        <artifactId>jfreechart</artifactId>
        <version>1.5.4</version>
    </dependency>
</dependencies>
```

---

## 4️⃣ KIẾN TRÚC HỆ THỐNG

### **Architecture Overview:**

```
┌─────────────────────────────────────────────────────────┐
│                    SERVER SIDE                          │
├─────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────┐  │
│  │  Main Server Thread                               │  │
│  │  - Khởi động ServerSocket                        │  │
│  │  - Accept connections                             │  │
│  │  - Khởi tạo Database                             │  │
│  └────────┬─────────────────────────────────────────┘  │
│           │                                             │
│  ┌────────▼──────────────────────────────────────────┐ │
│  │  Thread Pool (ExecutorService)                    │ │
│  │  - Quản lý ClientHandler threads                  │ │
│  │  - Max 50 concurrent connections                  │ │
│  └────────┬──────────────────────────────────────────┘ │
│           │                                             │
│  ┌────────▼──────────────────────────────────────────┐ │
│  │  ClientHandler Threads (per client)               │ │
│  │  - Nhận commands từ client                       │ │
│  │  - Xử lý business logic                          │ │
│  │  - Gọi AuctionManager                            │ │
│  │  - Gửi responses về client                       │ │
│  └────────┬──────────────────────────────────────────┘ │
│           │                                             │
│  ┌────────▼──────────────────────────────────────────┐ │
│  │  AuctionManager (Singleton)                       │ │
│  │  - Quản lý tất cả auctions                       │ │
│  │  - Xử lý bids                                     │ │
│  │  - Broadcast updates                              │ │
│  │  - Synchronized methods                           │ │
│  └────────┬──────────────────────────────────────────┘ │
│           │                                             │
│  ┌────────▼──────────────────────────────────────────┐ │
│  │  Timer Thread Pool                                 │ │
│  │  - Countdown cho mỗi auction                      │ │
│  │  - Auto-extend time                               │ │
│  │  - Auto-close expired auctions                    │ │
│  └────────┬──────────────────────────────────────────┘ │
│           │                                             │
│  ┌────────▼──────────────────────────────────────────┐ │
│  │  DatabaseManager                                   │ │
│  │  - Connection pooling                             │ │
│  │  - CRUD operations                                 │ │
│  │  - Transaction management                          │ │
│  └───────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
                            ▲│
                            ││ TCP Socket
                            │▼
┌─────────────────────────────────────────────────────────┐
│                    CLIENT SIDE                          │
├─────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────┐  │
│  │  Main GUI Thread (Swing EDT)                     │  │
│  │  - Render UI                                      │  │
│  │  - Handle user interactions                       │  │
│  │  - Update display                                 │  │
│  └────────┬─────────────────────────────────────────┘  │
│           │                                             │
│  ┌────────▼──────────────────────────────────────────┐ │
│  │  NetworkHandler                                    │ │
│  │  - Quản lý Socket connection                      │ │
│  │  - Gửi commands đến server                       │ │
│  │  - Parse protocol messages                        │ │
│  └────────┬──────────────────────────────────────────┘ │
│           │                                             │
│  ┌────────▼──────────────────────────────────────────┐ │
│  │  Receiver Thread                                   │ │
│  │  - Lắng nghe messages từ server                  │ │
│  │  - Dispatch đến GUI (via SwingUtilities)         │ │
│  │  - Handle real-time updates                       │ │
│  └───────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

---

## 5️⃣ CẤU TRÚC SOURCE CODE

```
AuctionSystem/
├── server/
│   ├── AuctionServer.java           # Main server entry
│   ├── ClientHandler.java           # Handle 1 client connection
│   ├── AuctionManager.java          # Core business logic
│   ├── DatabaseManager.java         # Database operations
│   ├── models/
│   │   ├── User.java
│   │   ├── Auction.java
│   │   ├── Bid.java
│   │   └── AutoBid.java
│   ├── utils/
│   │   ├── PasswordUtils.java       # BCrypt hashing
│   │   ├── ProtocolParser.java      # Parse messages
│   │   └── Logger.java              # Logging system
│   └── config/
│       └── ServerConfig.java        # Configuration
│
├── client/
│   ├── AuctionClient.java           # Main client entry
│   ├── NetworkHandler.java          # Socket communication
│   ├── gui/
│   │   ├── LoginFrame.java          # Login window
│   │   ├── MainFrame.java           # Main application window
│   │   ├── AuctionPanel.java        # Display auction details
│   │   ├── BidPanel.java            # Bidding interface
│   │   └── HistoryPanel.java        # History view
│   └── models/
│       ├── AuctionInfo.java         # Client-side auction model
│       └── BidInfo.java             # Client-side bid model
│
├── shared/
│   ├── Protocol.java                # Protocol constants
│   └── Constants.java               # Shared constants
│
└── resources/
    ├── database/
    │   └── schema.sql               # Database schema
    └── config/
        └── server.properties        # Server configuration
```

---

## ❓ CÂU HỎI QUAN TRỌNG TRƯỚC KHI BẮT ĐẦU CODE:

1. **Bạn đã cài đặt Java chưa?** (Java 11+)
2. **Bạn dùng IDE nào?** (IntelliJ IDEA / Eclipse / VS Code?)
3. **Bạn đã biết Maven chưa?** (Quản lý dependencies)
4. **Bạn muốn tôi cung cấp code skeleton ngay không?**

→ Nếu sẵn sàng, tôi sẽ cung cấp **code hoàn chỉnh** cho từng class để bạn bắt đầu ngay! 😊

```plaintext
📦 Package: java.net
- ServerSocket: Lắng nghe kết nối từ clients
- Socket: Kết nối giữa client và server
- InputStream/OutputStream: Truyền dữ liệu
```

```plaintext
Server Port: 8888 (hoặc tùy chọn)
Protocol: TCP/IP
Encoding: UTF-8
```

```plaintext
📦 Package: java.util.concurrent
- ExecutorService: Quản lý thread pool
- ThreadPoolExecutor: Xử lý nhiều clients đồng thời
- ScheduledExecutorService: Timer tự động cho countdown
```

```plaintext
Thread chính (Main Thread)
├── Accept Thread: Chấp nhận kết nối mới
├── Thread Pool cho Clients (10-50 threads)
│   ├── ClientHandler Thread 1
│   ├── ClientHandler Thread 2
│   └── ClientHandler Thread N
└── Timer Thread Pool
    ├── Auction Timer 1
    ├── Auction Timer 2
    └── Auction Timer N
```

```plaintext
📦 Package: java.util.concurrent
- ConcurrentHashMap: Map thread-safe
- CopyOnWriteArrayList: List thread-safe
- ReentrantLock: Khóa cho critical sections
- AtomicInteger/AtomicLong: Biến atomic
- synchronized keyword: Đồng bộ methods
```

```plaintext
Tình huống: Alice và Bob cùng đặt giá 25tr vào đúng 1 lúc

KHÔNG có synchronization:
├── Server nhận bid của Alice: 25tr ✅
├── Server nhận bid của Bob: 25tr ✅
└── ❌ KẾT QUẢ: Cả 2 đều được chấp nhận (SAI!)

CÓ synchronization:
├── Server lock → xử lý bid Alice: 25tr ✅
├── Server unlock
├── Server lock → xử lý bid Bob: 25tr ❌ (giá không cao hơn Alice)
└── ✅ KẾT QUẢ: Chỉ Alice thắng (ĐÚNG!)
```

```plaintext
📦 Package: javax.swing
- JFrame: Cửa sổ chính
- JPanel: Container chứa components
- JTable: Hiển thị danh sách auctions
- JButton: Nút bấm
- JTextField: Nhập liệu
- JLabel: Hiển thị text
- JProgressBar: Thanh tiến trình (countdown)
- JTabbedPane: Nhiều tabs
- Timer: Cập nhật UI định kỳ
```

```plaintext
┌─────────────────────────────────────────────────────┐
│  AUCTION SYSTEM - User: Alice              [X]      │
├─────────────────────────────────────────────────────┤
│ [Đang đấu giá] [Tôi đã đấu] [Đã thắng] [Lịch sử]   │
├─────────────────────────────────────────────────────┤
│  ID │ Tên sản phẩm      │ Giá hiện tại │ Thời gian │
│  1  │ iPhone 15 Pro Max │ 25,000,000  │ 02:34     │
│  2  │ MacBook Pro M3    │ 35,000,000  │ 01:15     │
│  3  │ PS5 Pro           │ 12,500,000  │ 05:20     │
├─────────────────────────────────────────────────────┤
│ Chi tiết đấu giá:                                   │
│ ┌─────────────────────────────────────────────────┐ │
│ │ 📱 iPhone 15 Pro Max 256GB                      │ │
│ │ Giá khởi điểm: 20,000,000 VNĐ                  │ │
│ │ Giá hiện tại: 25,000,000 VNĐ                   │ │
│ │ Người dẫn đầu: Bob                              │ │
│ │ Thời gian: [████████░░] 02:34                  │ │
│ │                                                 │ │
│ │ Lịch sử đấu giá:                                │ │
│ │ • Bob     - 25,000,000 VNĐ  [02:35]            │ │
│ │ • Alice   - 24,000,000 VNĐ  [02:50]            │ │
│ │ • Charlie - 23,000,000 VNĐ  [03:10]            │ │
│ └─────────────────────────────────────────────────┘ │
│ Giá muốn đặt: [26000000    ] [Đặt giá]  [+1tr]     │
│                                          [+5tr]     │
└─────────────────────────────────────────────────────┘
```

```plaintext
📦 Package: java.net, java.io
- Socket: Kết nối đến server
- BufferedReader: Đọc dữ liệu từ server
- PrintWriter: Gửi dữ liệu đến server
- Thread riêng: Lắng nghe messages từ server
```

```plaintext
📦 SQLite JDBC Driver
- Artifact: org.xerial:sqlite-jdbc:3.44.1.0
- Download: https://github.com/xerial/sqlite-jdbc
```

```plaintext
📦 MySQL Connector/J
- Artifact: mysql:mysql-connector-java:8.0.33
- Cần cài MySQL Server riêng
```

```sql
-- Bảng Users (Người dùng)
CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100),
    balance DECIMAL(15,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT 1
);

-- Bảng Auctions (Các phiên đấu giá)
CREATE TABLE auctions (
    auction_id INTEGER PRIMARY KEY AUTOINCREMENT,
    item_name VARCHAR(200) NOT NULL,
    description TEXT,
    starting_price DECIMAL(15,2) NOT NULL,
    current_price DECIMAL(15,2) NOT NULL,
    reserve_price DECIMAL(15,2),  -- Giá dự trữ
    highest_bidder_id INTEGER,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    status VARCHAR(20) DEFAULT 'ACTIVE',  -- ACTIVE, ENDED, CANCELLED
    bid_increment DECIMAL(15,2) DEFAULT 500000,  -- Bước nhảy giá
    created_by INTEGER,
    FOREIGN KEY (highest_bidder_id) REFERENCES users(user_id),
    FOREIGN KEY (created_by) REFERENCES users(user_id)
);

-- Bảng Bids (Lịch sử đặt giá)
CREATE TABLE bids (
    bid_id INTEGER PRIMARY KEY AUTOINCREMENT,
    auction_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    bid_amount DECIMAL(15,2) NOT NULL,
    bid_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_auto_bid BOOLEAN DEFAULT 0,  -- Bid tự động hay không
    FOREIGN KEY (auction_id) REFERENCES auctions(auction_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Bảng Auto_Bids (Đấu giá tự động)
CREATE TABLE auto_bids (
    auto_bid_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    auction_id INTEGER NOT NULL,
    max_amount DECIMAL(15,2) NOT NULL,  -- Giá tối đa
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (auction_id) REFERENCES auctions(auction_id)
);

-- Bảng Watchlist (Theo dõi)
CREATE TABLE watchlist (
    watchlist_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    auction_id INTEGER NOT NULL,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (auction_id) REFERENCES auctions(auction_id)
);

-- Bảng Admin_Logs (Nhật ký quản trị)
CREATE TABLE admin_logs (
    log_id INTEGER PRIMARY KEY AUTOINCREMENT,
    admin_id INTEGER NOT NULL,
    action VARCHAR(100) NOT NULL,
    details TEXT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES users(user_id)
);
```

```plaintext
COMMAND|param1|param2|param3|...
```

```plaintext
REGISTER|username|password|email
LOGIN|username|password
LOGOUT
```

```plaintext
AUTH_SUCCESS|user_id|username|balance
AUTH_FAILED|error_message
REGISTER_SUCCESS|user_id
REGISTER_FAILED|error_message
```

```plaintext
Client gửi: LOGIN|alice|mypassword123
Server trả:  AUTH_SUCCESS|101|alice|50000000.00
```

```plaintext
LIST_AUCTIONS                    // Lấy tất cả
LIST_AUCTIONS|ACTIVE             // Chỉ đang diễn ra
LIST_AUCTIONS|MY_BIDS            // Những cái tôi đã đấu
LIST_AUCTIONS|SEARCH|keyword     // Tìm kiếm
```

```plaintext
AUCTION_LIST|count|auction1_data|auction2_data|...

Format của auction_data:
id:name:currentPrice:highestBidder:timeLeft:status

Ví dụ:
AUCTION_LIST|3|1:iPhone:25000000:Bob:154:ACTIVE|2:MacBook:35000000:Alice:320:ACTIVE
```

```plaintext
GET_AUCTION|auction_id
JOIN_AUCTION|auction_id          // Tham gia xem đấu giá
LEAVE_AUCTION|auction_id         // Rời khỏi
GET_BID_HISTORY|auction_id|limit // Lấy lịch sử
```

```plaintext
AUCTION_DETAIL|id|name|description|startPrice|currentPrice|reservePrice|highestBidder|startTime|endTime|timeLeft|bidIncrement|status

BID_HISTORY|count|bid1_data|bid2_data|...
Format: bidder:amount:timestamp

Ví dụ:
BID_HISTORY|3|Bob:25000000:2025-10-28T14:30:25|Alice:24000000:2025-10-28T14:29:10
```

```plaintext
PLACE_BID|auction_id|amount
SET_AUTO_BID|auction_id|max_amount   // Đặt giá tự động
CANCEL_AUTO_BID|auction_id
```

```plaintext
BID_SUCCESS|auction_id|new_price|your_rank
BID_FAILED|auction_id|reason

Reasons:
- PRICE_TOO_LOW: Giá thấp hơn giá hiện tại
- INSUFFICIENT_FUNDS: Không đủ tiền
- AUCTION_ENDED: Đấu giá đã kết thúc
- SELF_HIGHEST: Bạn đang dẫn đầu rồi
- INVALID_INCREMENT: Không đúng bước nhảy
```

```plaintext
BID_UPDATE|auction_id|bidder_username|new_price|time_left
OUTBID_ALERT|auction_id|new_price|new_bidder
AUCTION_EXTENDED|auction_id|new_end_time|reason
AUCTION_ENDING_SOON|auction_id|seconds_left
AUCTION_ENDED|auction_id|winner_username|final_price|total_bids
TIME_TICK|auction_id|seconds_left
```

```plaintext
1. Bob đặt giá 25tr:
   Server → All: BID_UPDATE|1|Bob|25000000|145

2. Alice bị đè giá:
   Server → Alice: OUTBID_ALERT|1|25000000|Bob

3. Ai đó đặt giá trong 10s cuối:
   Server → All: AUCTION_EXTENDED|1|2025-10-28T15:05:00|LATE_BID

4. Đếm ngược:
   Server → All: TIME_TICK|1|30
   Server → All: TIME_TICK|1|29
   ...

5. Kết thúc:
   Server → All: AUCTION_ENDED|1|Bob|30000000|15
```

```plaintext
ADMIN_CREATE_AUCTION|name|description|startPrice|reservePrice|durationMinutes|bidIncrement
ADMIN_DELETE_AUCTION|auction_id
ADMIN_BAN_USER|user_id|reason
ADMIN_GET_STATS
```

```plaintext
ADMIN_SUCCESS|message
ADMIN_FAILED|reason
ADMIN_STATS|total_users|active_auctions|total_bids|total_revenue
```

```plaintext
ADD_WATCHLIST|auction_id
REMOVE_WATCHLIST|auction_id
GET_WATCHLIST
```

```plaintext
WATCHLIST_UPDATED|auction_id|added_or_removed
WATCHLIST_ITEMS|count|auction1_id|auction2_id|...
WATCHLIST_ALERT|auction_id|event_type|details
```

```plaintext
ERROR|error_code|error_message
PING                          // Heartbeat
PONG                          // Response
SERVER_SHUTDOWN|seconds       // Server sắp tắt
RECONNECT|new_server_address  // Chuyển server
```

```plaintext
PONG
KEEPALIVE
```

```plaintext
Mỗi 30 giây:
├── Server gửi: PING
├── Client phải trả lời trong 5s: PONG
└── Nếu không trả lời: Server ngắt kết nối
```

```java
// Server side
ScheduledExecutorService heartbeat = Executors.newScheduledThreadPool(1);
heartbeat.scheduleAtFixedRate(() -> {
    for (ClientHandler client : clients) {
        if (!client.isAlive()) {
            client.disconnect();
        } else {
            client.sendPing();
        }
    }
}, 0, 30, TimeUnit.SECONDS);
```

```plaintext
Character Set: UTF-8
Line Terminator: \n (newline)
Delimiter: | (pipe)
```

```plaintext
Nếu data chứa |: thay bằng \|
Nếu data chứa \: thay bằng \\
Nếu data chứa \n: thay bằng \n
```

```java
// Không lưu plain text
// Dùng BCrypt hash
import org.mindrot.jbcrypt.BCrypt;

String hashed = BCrypt.hashpw(plainPassword, BCrypt.gensalt(12));
boolean match = BCrypt.checkpw(plainPassword, hashedPassword);
```

```java
// Dùng SSLSocket thay vì Socket thông thường
SSLSocketFactory factory = (SSLSocketFactory) SSLSocketFactory.getDefault();
SSLSocket sslSocket = (SSLSocket) factory.createSocket(host, port);
```

```xml
<dependencies>
    <!-- SQLite JDBC Driver -->
    <dependency>
        <groupId>org.xerial</groupId>
        <artifactId>sqlite-jdbc</artifactId>
        <version>3.44.1.0</version>
    </dependency>
    
    <!-- BCrypt for password hashing -->
    <dependency>
        <groupId>org.mindrot</groupId>
        <artifactId>jbcrypt</artifactId>
        <version>0.4</version>
    </dependency>
    
    <!-- JSON parsing (optional, for config files) -->
    <dependency>
        <groupId>com.google.code.gson</groupId>
        <artifactId>gson</artifactId>
        <version>2.10.1</version>
    </dependency>
    
    <!-- Logging -->
    <dependency>
        <groupId>org.slf4j</groupId>
        <artifactId>slf4j-simple</artifactId>
        <version>2.0.9</version>
    </dependency>
    
    <!-- JFreeChart for graphs (optional) -->
    <dependency>
        <groupId>org.jfree</groupId>
        <artifactId>jfreechart</artifactId>
        <version>1.5.4</version>
    </dependency>
</dependencies>
```

```plaintext
┌─────────────────────────────────────────────────────────┐
│                    SERVER SIDE                          │
├─────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────┐  │
│  │  Main Server Thread                               │  │
│  │  - Khởi động ServerSocket                        │  │
│  │  - Accept connections                             │  │
│  │  - Khởi tạo Database                             │  │
│  └────────┬─────────────────────────────────────────┘  │
│           │                                             │
│  ┌────────▼──────────────────────────────────────────┐ │
│  │  Thread Pool (ExecutorService)                    │ │
│  │  - Quản lý ClientHandler threads                  │ │
│  │  - Max 50 concurrent connections                  │ │
│  └────────┬──────────────────────────────────────────┘ │
│           │                                             │
│  ┌────────▼──────────────────────────────────────────┐ │
│  │  ClientHandler Threads (per client)               │ │
│  │  - Nhận commands từ client                       │ │
│  │  - Xử lý business logic                          │ │
│  │  - Gọi AuctionManager                            │ │
│  │  - Gửi responses về client                       │ │
│  └────────┬──────────────────────────────────────────┘ │
│           │                                             │
│  ┌────────▼──────────────────────────────────────────┐ │
│  │  AuctionManager (Singleton)                       │ │
│  │  - Quản lý tất cả auctions                       │ │
│  │  - Xử lý bids                                     │ │
│  │  - Broadcast updates                              │ │
│  │  - Synchronized methods                           │ │
│  └────────┬──────────────────────────────────────────┘ │
│           │                                             │
│  ┌────────▼──────────────────────────────────────────┐ │
│  │  Timer Thread Pool                                 │ │
│  │  - Countdown cho mỗi auction                      │ │
│  │  - Auto-extend time                               │ │
│  │  - Auto-close expired auctions                    │ │
│  └────────┬──────────────────────────────────────────┘ │
│           │                                             │
│  ┌────────▼──────────────────────────────────────────┐ │
│  │  DatabaseManager                                   │ │
│  │  - Connection pooling                             │ │
│  │  - CRUD operations                                 │ │
│  │  - Transaction management                          │ │
│  └───────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
                            ▲│
                            ││ TCP Socket
                            │▼
┌─────────────────────────────────────────────────────────┐
│                    CLIENT SIDE                          │
├─────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────┐  │
│  │  Main GUI Thread (Swing EDT)                     │  │
│  │  - Render UI                                      │  │
│  │  - Handle user interactions                       │  │
│  │  - Update display                                 │  │
│  └────────┬─────────────────────────────────────────┘  │
│           │                                             │
│  ┌────────▼──────────────────────────────────────────┐ │
│  │  NetworkHandler                                    │ │
│  │  - Quản lý Socket connection                      │ │
│  │  - Gửi commands đến server                       │ │
│  │  - Parse protocol messages                        │ │
│  └────────┬──────────────────────────────────────────┘ │
│           │                                             │
│  ┌────────▼──────────────────────────────────────────┐ │
│  │  Receiver Thread                                   │ │
│  │  - Lắng nghe messages từ server                  │ │
│  │  - Dispatch đến GUI (via SwingUtilities)         │ │
│  │  - Handle real-time updates                       │ │
│  └───────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

```plaintext
AuctionSystem/
├── server/
│   ├── AuctionServer.java           # Main server entry
│   ├── ClientHandler.java           # Handle 1 client connection
│   ├── AuctionManager.java          # Core business logic
│   ├── DatabaseManager.java         # Database operations
│   ├── models/
│   │   ├── User.java
│   │   ├── Auction.java
│   │   ├── Bid.java
│   │   └── AutoBid.java
│   ├── utils/
│   │   ├── PasswordUtils.java       # BCrypt hashing
│   │   ├── ProtocolParser.java      # Parse messages
│   │   └── Logger.java              # Logging system
│   └── config/
│       └── ServerConfig.java        # Configuration
│
├── client/
│   ├── AuctionClient.java           # Main client entry
│   ├── NetworkHandler.java          # Socket communication
│   ├── gui/
│   │   ├── LoginFrame.java          # Login window
│   │   ├── MainFrame.java           # Main application window
│   │   ├── AuctionPanel.java        # Display auction details
│   │   ├── BidPanel.java            # Bidding interface
│   │   └── HistoryPanel.java        # History view
│   └── models/
│       ├── AuctionInfo.java         # Client-side auction model
│       └── BidInfo.java             # Client-side bid model
│
├── shared/
│   ├── Protocol.java                # Protocol constants
│   └── Constants.java               # Shared constants
│
└── resources/
    ├── database/
    │   └── schema.sql               # Database schema
    └── config/
        └── server.properties        # Server configuration
```

---

**User**

ko code ko gì hết, chúng ta chỉ nói chuyện về việc sẽ sử dụng những thứ gì thôi, ngôn ngữ, cấu trúc, database ? ví dụ như java mvc + html + css + boostrap + Mysql ?

---

**Cursor**

# 🎯 CHỌN STACK CÔNG NGHỆ - HỆ THỐNG ĐẤU GIÁ MỨC 3

---

## 📊 CÁC LỰA CHỌN KIẾN TRÚC

Bạn có **3 lựa chọn chính** về kiến trúc:

---

## 1️⃣ OPTION 1: DESKTOP APPLICATION (Pure Socket)

### **Stack công nghệ:**

```
SERVER:
├── Ngôn ngữ: Java
├── Framework: Không cần (Pure Socket)
├── Network: java.net.Socket (TCP/IP)
├── Database: MySQL hoặc SQLite
├── Architecture: Multi-threaded Socket Server
└── UI: Console (chỉ log)

CLIENT:
├── Ngôn ngữ: Java
├── UI Framework: Java Swing hoặc JavaFX
├── Network: java.net.Socket
└── Architecture: Desktop Application (file .jar)
```

### **Ưu điểm:**
- ✅ **Đúng bản chất Lập trình mạng** - Socket thuần túy
- ✅ **Dễ demo** - Không cần trình duyệt, mở app là chạy
- ✅ **Hiệu suất cao** - Giao tiếp trực tiếp qua TCP
- ✅ **Đơn giản hơn** - Không cần học framework web
- ✅ **Phù hợp thời gian ngắn** - Ít công nghệ phải học

### **Nhược điểm:**
- ❌ Giao diện Swing/JavaFX không đẹp bằng web
- ❌ Phải cài Java trên máy client
- ❌ Không có tính di động (mobile khó)
- ❌ Ít "wow factor" về mặt UI

### **Phù hợp khi:**
- Tập trung vào **network programming** thuần túy
- Thời gian hạn chế
- Muốn nêu rõ **Socket, Multi-threading, Protocol** trong presentation

---

## 2️⃣ OPTION 2: WEB APPLICATION (Java Backend + HTML/CSS/JS Frontend)

### **Stack công nghệ:**

#### **Cách 2A: Spring Boot + WebSocket (Modern)**

```
BACKEND:
├── Ngôn ngữ: Java
├── Framework: Spring Boot
│   ├── Spring MVC (REST API)
│   ├── Spring WebSocket (Real-time)
│   └── Spring Data JPA (Database)
├── Database: MySQL
├── Architecture: MVC Pattern
└── Port: 8080 (HTTP) + 8888 (WebSocket)

FRONTEND:
├── HTML5
├── CSS3 + Bootstrap 5
├── JavaScript (Vanilla hoặc jQuery)
├── WebSocket API (for real-time)
└── Architecture: SPA (Single Page Application)
```

**Chi tiết:**
```
Kiến trúc:
Browser (HTML/CSS/Bootstrap)
   ↕ (HTTP REST API)
Spring Boot Backend
   ↕ (WebSocket)
Real-time Updates
   ↕
MySQL Database
```

#### **Cách 2B: Java Servlet + JSP (Traditional)**

```
BACKEND:
├── Ngôn ngữ: Java
├── Framework: Java Servlet + JSP
├── Server: Apache Tomcat
├── Database: MySQL
├── JDBC: mysql-connector-java
└── Architecture: MVC Pattern

FRONTEND:
├── JSP (Java Server Pages)
├── HTML + CSS + Bootstrap
├── JavaScript + AJAX
└── Optional: jQuery
```

**Chi tiết:**
```
Kiến trúc:
Browser (JSP rendered HTML)
   ↕ (HTTP/AJAX)
Servlet (Controller)
   ↕
Model (Java Classes)
   ↕
MySQL Database
```

### **Ưu điểm WEB:**
- ✅ **Giao diện đẹp** - HTML/CSS/Bootstrap hiện đại
- ✅ **Cross-platform** - Chạy mọi nơi có browser
- ✅ **Professional** - Giống hệ thống thật
- ✅ **Dễ deploy** - Chỉ cần URL
- ✅ **Responsive** - Tự động co giãn màn hình

### **Nhược điểm WEB:**
- ❌ **Phức tạp hơn** - Phải học framework (Spring/Servlet)
- ❌ **Tốn thời gian** - Setup, config nhiều
- ❌ **Ít tập trung Socket** - Dùng WebSocket/HTTP thay vì raw Socket
- ❌ **Xa rời bản chất môn học** - Không phải Socket thuần túy

### **Phù hợp khi:**
- Muốn UI đẹp, professional
- Có thời gian 7+ ngày
- Muốn làm luôn BTL
- Đã biết Spring Boot hoặc Servlet

---

## 3️⃣ OPTION 3: HYBRID (Desktop Client + Web Admin)

### **Stack công nghệ:**

```
SERVER:
├── Ngôn ngữ: Java
├── Core: Socket Server (TCP/IP)
├── API: Spring Boot REST (optional)
├── Database: MySQL
└── Architecture: Dual Interface

DESKTOP CLIENT:
├── Java Swing/JavaFX
├── Socket Connection
└── For end users (đấu giá)

WEB ADMIN:
├── HTML + CSS + Bootstrap
├── Spring Boot MVC
└── For admin (quản lý)
```

**Chi tiết:**
```
Desktop Users ─(Socket)→ Server ←(HTTP)─ Web Admin
                            ↓
                         MySQL
```

### **Ưu điểm HYBRID:**
- ✅ **Best of both worlds**
- ✅ Desktop client = Đúng network programming
- ✅ Web admin = Giao diện đẹp cho quản trị
- ✅ Thể hiện được nhiều công nghệ

### **Nhược điểm HYBRID:**
- ❌ **Phức tạp nhất**
- ❌ Tốn nhiều thời gian nhất
- ❌ Maintain 2 codebase

### **Phù hợp khi:**
- Có 8+ ngày
- Team 2-3 người
- Muốn điểm tối đa

---

## 📋 SO SÁNH CHI TIẾT

| Tiêu chí | Desktop (Socket) | Web (Spring Boot) | Web (Servlet/JSP) |
|---------|-----------------|-------------------|-------------------|
| **Thời gian setup** | 1-2 giờ | 3-4 giờ | 2-3 giờ |
| **Độ khó** | Trung bình | Khó | Trung bình |
| **Học thêm gì** | Swing/JavaFX | Spring Boot, WebSocket | Servlet, JSP |
| **UI đẹp** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Network focus** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **Real-time** | Rất dễ | Trung bình | Khó |
| **Professional** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Phù hợp BTL** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

---

## 💡 KHUYẾN NGHỊ CHO MỨC 3

### **OPTION 1: Desktop Application (KHUYẾN NGHỊ NHẤT)**

```
✅ CHỌN STACK NÀY NẾU:
- Bạn có 6-7 ngày
- Muốn tập trung vào LẬP TRÌNH MẠNG
- Chưa biết Spring Boot
- Muốn làm nhanh, hiệu quả
```

#### **Stack cụ thể:**

```yaml
SERVER:
  Language: Java 11+
  Network: Pure Socket (java.net)
  Threading: ExecutorService (Thread Pool)
  Database: MySQL 8.0
  Driver: mysql-connector-java
  Security: BCrypt (password hashing)
  Logging: SLF4J
  Build: Maven

CLIENT:
  Language: Java 11+
  UI: JavaFX (đẹp hơn Swing)
  Network: Socket
  Architecture: MVC Pattern
  Build: Maven
  
DATABASE:
  Engine: MySQL 8.0
  Tables: users, auctions, bids, auto_bids, watchlist, admin_logs
```

**Cấu trúc project:**
```
AuctionSystem/
├── auction-server/          (Maven module)
│   ├── src/main/java/
│   │   ├── server/
│   │   ├── dao/            (Data Access Object)
│   │   ├── model/
│   │   └── util/
│   └── pom.xml
│
├── auction-client/          (Maven module)
│   ├── src/main/java/
│   │   ├── client/
│   │   ├── gui/
│   │   ├── controller/
│   │   └── model/
│   └── pom.xml
│
└── pom.xml                  (Parent POM)
```

**Dependencies chính:**
```xml
<!-- MySQL -->
mysql:mysql-connector-java:8.0.33

<!-- BCrypt -->
org.mindrot:jbcrypt:0.4

<!-- JavaFX -->
org.openjfx:javafx-controls:17.0.2
org.openjfx:javafx-fxml:17.0.2

<!-- Logging -->
org.slf4j:slf4j-simple:2.0.9
```

---

### **OPTION 2: Web Application (Nếu muốn UI đẹp)**

```
✅ CHỌN STACK NÀY NẾU:
- Bạn đã biết Spring Boot
- Có 7-8 ngày
- Muốn làm luôn BTL
- Ưu tiên UI đẹp
```

#### **Stack cụ thể:**

```yaml
BACKEND:
  Framework: Spring Boot 3.x
  Modules:
    - Spring Web (REST API)
    - Spring WebSocket (Real-time)
    - Spring Data JPA (ORM)
    - Spring Security (Authentication)
  Database: MySQL 8.0
  Build: Maven
  Port: 8080

FRONTEND:
  HTML5 + CSS3
  Framework: Bootstrap 5
  JavaScript: Vanilla JS
  Real-time: WebSocket API
  Charts: Chart.js (for graphs)
```

**Cấu trúc project:**
```
auction-web/
├── src/main/java/
│   └── com.auction/
│       ├── AuctionApplication.java
│       ├── controller/      (REST Controllers)
│       ├── websocket/       (WebSocket handlers)
│       ├── service/         (Business logic)
│       ├── repository/      (JPA Repositories)
│       ├── model/           (Entities)
│       └── config/          (Configurations)
│
├── src/main/resources/
│   ├── static/              (CSS, JS, images)
│   ├── templates/           (HTML - Thymeleaf)
│   └── application.properties
│
└── pom.xml
```

**Dependencies chính:**
```xml
<!-- Spring Boot Starter Web -->
org.springframework.boot:spring-boot-starter-web

<!-- Spring Boot WebSocket -->
org.springframework.boot:spring-boot-starter-websocket

<!-- Spring Data JPA -->
org.springframework.boot:spring-boot-starter-data-jpa

<!-- MySQL -->
mysql:mysql-connector-java

<!-- Thymeleaf (template engine) -->
org.springframework.boot:spring-boot-starter-thymeleaf
```

**Giao thức:**
- REST API cho CRUD operations
- WebSocket cho real-time updates
- JSON format cho data exchange

---

## 🎯 QUYẾT ĐỊNH CUỐI CÙNG

### **TÔI KHUYÊN BẠN:**

Vì bạn chọn **Mức 3** và đây là môn **Lập trình mạng**, tôi nghĩ:

### **👉 CHỌN DESKTOP APPLICATION (OPTION 1)**

**Lý do:**

1. **Đúng tinh thần môn học** ⭐⭐⭐⭐⭐
   - Socket programming thuần túy
   - Multi-threading rõ ràng
   - Custom protocol design
   - Thể hiện được kiến thức network

2. **Thời gian phù hợp** ⭐⭐⭐⭐⭐
   - 6-7 ngày là đủ
   - Không phải học thêm framework phức tạp
   - Focus vào logic, không mất thời gian CSS

3. **Demo hiệu quả** ⭐⭐⭐⭐
   - Mở nhiều client trên màn hình
   - Thấy rõ real-time communication
   - Dễ giải thích cơ chế hoạt động

4. **Điểm presentation** ⭐⭐⭐⭐⭐
   - Giảng viên đánh giá cao network knowledge
   - Nêu rõ: Socket, Threading, Synchronization, Protocol
   - Không bị "lạc hướng" vào frontend

### **Stack cụ thể tôi đề xuất:**

```
SERVER:
✅ Java 11+
✅ Pure Socket (java.net.ServerSocket)
✅ ExecutorService (Thread Pool)
✅ MySQL 8.0
✅ BCrypt (mã hóa password)
✅ Custom Text Protocol
✅ Maven build

CLIENT:
✅ Java 11+
✅ JavaFX (UI đẹp hơn Swing)
✅ Socket (java.net.Socket)
✅ MVC Pattern
✅ Maven build
```

---

## 📐 KIẾN TRÚC TỔNG THỂ (Desktop Option)

```
┌─────────────────────────────────────────────────┐
│              MYSQL DATABASE                     │
│  Tables: users, auctions, bids, auto_bids       │
└──────────────────┬──────────────────────────────┘
                   │ JDBC
                   │
┌──────────────────▼──────────────────────────────┐
│           JAVA SOCKET SERVER                    │
│  - ServerSocket (port 8888)                     │
│  - Thread Pool (ExecutorService)                │
│  - ClientHandler per connection                 │
│  - AuctionManager (business logic)              │
│  - DatabaseManager (DAO pattern)                │
│  - Custom Protocol Parser                       │
└──────────────────┬──────────────────────────────┘
                   │ TCP/IP Socket
                   │ Custom Text Protocol
        ┌──────────┼──────────┐
        │          │          │
┌───────▼────┐ ┌──▼──────┐ ┌─▼────────┐
│  Client 1  │ │Client 2 │ │ Client N │
│  (JavaFX)  │ │(JavaFX) │ │ (JavaFX) │
│            │ │         │ │          │
│ - Login    │ │- Auctions│ │- Bidding │
│ - Browse   │ │- Bid    │ │- History │
│ - Watch    │ │- Alert  │ │- Profile │
└────────────┘ └─────────┘ └──────────┘
```

---

## 🔧 CÔNG NGHỆ CHI TIẾT

### **1. MySQL Schema:**
```
Database: auction_db
Tables: 6 tables (như đã nói ở trên)
Storage Engine: InnoDB
Charset: utf8mb4
Collation: utf8mb4_unicode_ci
```

### **2. Network Protocol:**
```
Transport: TCP/IP
Format: Text-based (delimiter: |)
Encoding: UTF-8
Heartbeat: 30s interval
Commands: 30+ message types
```

### **3. Threading Model:**
```
Main Thread: Accept connections
Thread Pool: 50 worker threads
Timer Pool: Per-auction countdown threads
Synchronization: synchronized + ConcurrentHashMap
```

### **4. Security:**
```
Password: BCrypt (cost factor 12)
Connection: Optional SSL/TLS
Validation: Server-side input validation
SQL Injection: PreparedStatement
```

### **5. JavaFX UI Components:**
```
- TableView: Hiển thị danh sách auctions
- ListView: Bid history
- ProgressBar: Countdown timer
- TextField: Input fields
- Button: Actions
- Alert: Notifications
- LineChart: Price history graph
- TabPane: Multiple views
```

---

## ❓ CÂU HỎI ĐỂ XÁC NHẬN:

1. **Bạn đã từng làm Java Swing/JavaFX chưa?**
   - Nếu CHƯA → Tôi khuyên JavaFX (modern hơn)
   - Nếu RỒI → Dùng cái nào quen

2. **Bạn có biết Spring Boot không?**
   - Nếu KHÔNG → Chắc chắn chọn Desktop
   - Nếu CÓ → Có thể cân nhắc Web

3. **Bạn muốn tập trung vào điểm nào trong presentation?**
   - Network programming → Desktop
   - Full-stack web → Web

4. **Bạn có người làm cùng không?**
   - Làm 1 mình → Desktop
   - 2-3 người → Có thể Hybrid

**Bạn nghĩ sao về stack Desktop (Java + JavaFX + Socket + MySQL)?** 

Hay bạn vẫn muốn đi hướng Web? 🤔

```plaintext
SERVER:
├── Ngôn ngữ: Java
├── Framework: Không cần (Pure Socket)
├── Network: java.net.Socket (TCP/IP)
├── Database: MySQL hoặc SQLite
├── Architecture: Multi-threaded Socket Server
└── UI: Console (chỉ log)

CLIENT:
├── Ngôn ngữ: Java
├── UI Framework: Java Swing hoặc JavaFX
├── Network: java.net.Socket
└── Architecture: Desktop Application (file .jar)
```

```plaintext
BACKEND:
├── Ngôn ngữ: Java
├── Framework: Spring Boot
│   ├── Spring MVC (REST API)
│   ├── Spring WebSocket (Real-time)
│   └── Spring Data JPA (Database)
├── Database: MySQL
├── Architecture: MVC Pattern
└── Port: 8080 (HTTP) + 8888 (WebSocket)

FRONTEND:
├── HTML5
├── CSS3 + Bootstrap 5
├── JavaScript (Vanilla hoặc jQuery)
├── WebSocket API (for real-time)
└── Architecture: SPA (Single Page Application)
```

```plaintext
Kiến trúc:
Browser (HTML/CSS/Bootstrap)
   ↕ (HTTP REST API)
Spring Boot Backend
   ↕ (WebSocket)
Real-time Updates
   ↕
MySQL Database
```

```plaintext
BACKEND:
├── Ngôn ngữ: Java
├── Framework: Java Servlet + JSP
├── Server: Apache Tomcat
├── Database: MySQL
├── JDBC: mysql-connector-java
└── Architecture: MVC Pattern

FRONTEND:
├── JSP (Java Server Pages)
├── HTML + CSS + Bootstrap
├── JavaScript + AJAX
└── Optional: jQuery
```

```plaintext
Kiến trúc:
Browser (JSP rendered HTML)
   ↕ (HTTP/AJAX)
Servlet (Controller)
   ↕
Model (Java Classes)
   ↕
MySQL Database
```

```plaintext
SERVER:
├── Ngôn ngữ: Java
├── Core: Socket Server (TCP/IP)
├── API: Spring Boot REST (optional)
├── Database: MySQL
└── Architecture: Dual Interface

DESKTOP CLIENT:
├── Java Swing/JavaFX
├── Socket Connection
└── For end users (đấu giá)

WEB ADMIN:
├── HTML + CSS + Bootstrap
├── Spring Boot MVC
└── For admin (quản lý)
```

```plaintext
Desktop Users ─(Socket)→ Server ←(HTTP)─ Web Admin
                            ↓
                         MySQL
```

```plaintext
✅ CHỌN STACK NÀY NẾU:
- Bạn có 6-7 ngày
- Muốn tập trung vào LẬP TRÌNH MẠNG
- Chưa biết Spring Boot
- Muốn làm nhanh, hiệu quả
```

```yaml
SERVER:
  Language: Java 11+
  Network: Pure Socket (java.net)
  Threading: ExecutorService (Thread Pool)
  Database: MySQL 8.0
  Driver: mysql-connector-java
  Security: BCrypt (password hashing)
  Logging: SLF4J
  Build: Maven

CLIENT:
  Language: Java 11+
  UI: JavaFX (đẹp hơn Swing)
  Network: Socket
  Architecture: MVC Pattern
  Build: Maven
  
DATABASE:
  Engine: MySQL 8.0
  Tables: users, auctions, bids, auto_bids, watchlist, admin_logs
```

```plaintext
AuctionSystem/
├── auction-server/          (Maven module)
│   ├── src/main/java/
│   │   ├── server/
│   │   ├── dao/            (Data Access Object)
│   │   ├── model/
│   │   └── util/
│   └── pom.xml
│
├── auction-client/          (Maven module)
│   ├── src/main/java/
│   │   ├── client/
│   │   ├── gui/
│   │   ├── controller/
│   │   └── model/
│   └── pom.xml
│
└── pom.xml                  (Parent POM)
```

```xml
<!-- MySQL -->
mysql:mysql-connector-java:8.0.33

<!-- BCrypt -->
org.mindrot:jbcrypt:0.4

<!-- JavaFX -->
org.openjfx:javafx-controls:17.0.2
org.openjfx:javafx-fxml:17.0.2

<!-- Logging -->
org.slf4j:slf4j-simple:2.0.9
```

```plaintext
✅ CHỌN STACK NÀY NẾU:
- Bạn đã biết Spring Boot
- Có 7-8 ngày
- Muốn làm luôn BTL
- Ưu tiên UI đẹp
```

```yaml
BACKEND:
  Framework: Spring Boot 3.x
  Modules:
    - Spring Web (REST API)
    - Spring WebSocket (Real-time)
    - Spring Data JPA (ORM)
    - Spring Security (Authentication)
  Database: MySQL 8.0
  Build: Maven
  Port: 8080

FRONTEND:
  HTML5 + CSS3
  Framework: Bootstrap 5
  JavaScript: Vanilla JS
  Real-time: WebSocket API
  Charts: Chart.js (for graphs)
```

```plaintext
auction-web/
├── src/main/java/
│   └── com.auction/
│       ├── AuctionApplication.java
│       ├── controller/      (REST Controllers)
│       ├── websocket/       (WebSocket handlers)
│       ├── service/         (Business logic)
│       ├── repository/      (JPA Repositories)
│       ├── model/           (Entities)
│       └── config/          (Configurations)
│
├── src/main/resources/
│   ├── static/              (CSS, JS, images)
│   ├── templates/           (HTML - Thymeleaf)
│   └── application.properties
│
└── pom.xml
```

```xml
<!-- Spring Boot Starter Web -->
org.springframework.boot:spring-boot-starter-web

<!-- Spring Boot WebSocket -->
org.springframework.boot:spring-boot-starter-websocket

<!-- Spring Data JPA -->
org.springframework.boot:spring-boot-starter-data-jpa

<!-- MySQL -->
mysql:mysql-connector-java

<!-- Thymeleaf (template engine) -->
org.springframework.boot:spring-boot-starter-thymeleaf
```

```plaintext
SERVER:
✅ Java 11+
✅ Pure Socket (java.net.ServerSocket)
✅ ExecutorService (Thread Pool)
✅ MySQL 8.0
✅ BCrypt (mã hóa password)
✅ Custom Text Protocol
✅ Maven build

CLIENT:
✅ Java 11+
✅ JavaFX (UI đẹp hơn Swing)
✅ Socket (java.net.Socket)
✅ MVC Pattern
✅ Maven build
```

```plaintext
┌─────────────────────────────────────────────────┐
│              MYSQL DATABASE                     │
│  Tables: users, auctions, bids, auto_bids       │
└──────────────────┬──────────────────────────────┘
                   │ JDBC
                   │
┌──────────────────▼──────────────────────────────┐
│           JAVA SOCKET SERVER                    │
│  - ServerSocket (port 8888)                     │
│  - Thread Pool (ExecutorService)                │
│  - ClientHandler per connection                 │
│  - AuctionManager (business logic)              │
│  - DatabaseManager (DAO pattern)                │
│  - Custom Protocol Parser                       │
└──────────────────┬──────────────────────────────┘
                   │ TCP/IP Socket
                   │ Custom Text Protocol
        ┌──────────┼──────────┐
        │          │          │
┌───────▼────┐ ┌──▼──────┐ ┌─▼────────┐
│  Client 1  │ │Client 2 │ │ Client N │
│  (JavaFX)  │ │(JavaFX) │ │ (JavaFX) │
│            │ │         │ │          │
│ - Login    │ │- Auctions│ │- Bidding │
│ - Browse   │ │- Bid    │ │- History │
│ - Watch    │ │- Alert  │ │- Profile │
└────────────┘ └─────────┘ └──────────┘
```

```plaintext
Database: auction_db
Tables: 6 tables (như đã nói ở trên)
Storage Engine: InnoDB
Charset: utf8mb4
Collation: utf8mb4_unicode_ci
```

```plaintext
Transport: TCP/IP
Format: Text-based (delimiter: |)
Encoding: UTF-8
Heartbeat: 30s interval
Commands: 30+ message types
```

```plaintext
Main Thread: Accept connections
Thread Pool: 50 worker threads
Timer Pool: Per-auction countdown threads
Synchronization: synchronized + ConcurrentHashMap
```

```plaintext
Password: BCrypt (cost factor 12)
Connection: Optional SSL/TLS
Validation: Server-side input validation
SQL Injection: PreparedStatement
```

```plaintext
- TableView: Hiển thị danh sách auctions
- ListView: Bid history
- ProgressBar: Countdown timer
- TextField: Input fields
- Button: Actions
- Alert: Notifications
- LineChart: Price history graph
- TabPane: Multiple views
```

---

**User**

tôi chọn theo hướng java spring boot nhé, giờ hãy tổng hợp lại những thứ sẽ làm

---

**Cursor**

# 📋 TỔNG HỢP DỰ ÁN - HỆ THỐNG ĐẤU GIÁ TRỰC TUYẾN (SPRING BOOT - MỨC 3)

---

## 🎯 THÔNG TIN TỔNG QUAN

### **Tên dự án:** Online Auction System  
### **Mức độ:** Mức 3 - Khá (Điểm 8.5-9.0)  
### **Thời gian:** 6-7 ngày  
### **Kiến trúc:** Web Application (Client-Server)

---

## 1️⃣ STACK CÔNG NGHỆ

### **BACKEND (Server Side)**

```yaml
Ngôn ngữ:
  - Java 17 (hoặc Java 11+)

Framework:
  - Spring Boot 3.x
  - Spring Web (REST API)
  - Spring WebSocket (Real-time communication)
  - Spring Data JPA (ORM - Object Relational Mapping)
  - Spring Security (Authentication & Authorization)

Database:
  - MySQL 8.0
  - Driver: mysql-connector-java

Build Tool:
  - Maven

Security:
  - BCrypt (Password hashing)
  - JWT (JSON Web Token) - optional
  - Spring Security

Server:
  - Embedded Tomcat (đi kèm Spring Boot)
  - Port: 8080 (HTTP/REST)
  - Port: 8080/ws (WebSocket endpoint)
```

### **FRONTEND (Client Side)**

```yaml
Core:
  - HTML5
  - CSS3
  - JavaScript (ES6+)

Framework/Library:
  - Bootstrap 5.3 (UI Framework)
  - jQuery 3.7 (DOM manipulation - optional)
  - SockJS + STOMP.js (WebSocket client)
  - Chart.js (Biểu đồ)
  - Font Awesome (Icons)

Template Engine:
  - Thymeleaf (Server-side rendering)

Architecture:
  - Responsive Design
  - Single Page Application style
```

### **DATABASE**

```yaml
Database Management System:
  - MySQL 8.0

Tables (6 bảng):
  1. users           (Người dùng)
  2. auctions        (Phiên đấu giá)
  3. bids            (Lịch sử đặt giá)
  4. auto_bids       (Đấu giá tự động)
  5. watchlist       (Danh sách theo dõi)
  6. admin_logs      (Nhật ký quản trị)

Charset: utf8mb4
Storage Engine: InnoDB
```

---

## 2️⃣ KIẾN TRÚC HỆ THỐNG

### **Mô hình MVC (Model-View-Controller)**

```
┌─────────────────────────────────────────────────────┐
│                   BROWSER (Client)                  │
│  ┌─────────────────────────────────────────────┐   │
│  │  HTML + CSS + Bootstrap + JavaScript        │   │
│  │  - Thymeleaf rendered pages                 │   │
│  │  - AJAX calls to REST API                   │   │
│  │  - WebSocket for real-time                  │   │
│  └────────┬────────────────────────────────────┘   │
└───────────┼──────────────────────────────────────────┘
            │
            │ HTTP/HTTPS (REST API)
            │ WebSocket (Real-time)
            │
┌───────────▼──────────────────────────────────────────┐
│         SPRING BOOT APPLICATION (Backend)            │
│  ┌──────────────────────────────────────────────┐   │
│  │  CONTROLLER LAYER                            │   │
│  │  - REST Controllers (API endpoints)          │   │
│  │  - WebSocket Controllers (Real-time)         │   │
│  │  - View Controllers (Page rendering)         │   │
│  └─────────┬────────────────────────────────────┘   │
│            │                                          │
│  ┌─────────▼────────────────────────────────────┐   │
│  │  SERVICE LAYER (Business Logic)              │   │
│  │  - AuctionService                            │   │
│  │  - BidService                                │   │
│  │  - UserService                               │   │
│  │  - AuthService                               │   │
│  └─────────┬────────────────────────────────────┘   │
│            │                                          │
│  ┌─────────▼────────────────────────────────────┐   │
│  │  REPOSITORY LAYER (Data Access)              │   │
│  │  - Spring Data JPA Repositories              │   │
│  │  - CRUD operations                           │   │
│  └─────────┬────────────────────────────────────┘   │
│            │                                          │
│  ┌─────────▼────────────────────────────────────┐   │
│  │  MODEL LAYER (Entities)                      │   │
│  │  - User, Auction, Bid, etc.                  │   │
│  │  - JPA annotations                           │   │
│  └──────────────────────────────────────────────┘   │
└───────────┼──────────────────────────────────────────┘
            │ JDBC
            │
┌───────────▼──────────────────────────────────────────┐
│               MYSQL DATABASE                         │
│  Tables: users, auctions, bids, auto_bids, etc.     │
└──────────────────────────────────────────────────────┘
```

### **Luồng xử lý Real-time (WebSocket)**

```
User A đặt giá
    │
    ▼
Browser gửi WebSocket message
    │
    ▼
WebSocket Controller nhận
    │
    ▼
AuctionService xử lý bid
    │
    ├─→ Validate bid
    ├─→ Lưu vào Database
    └─→ Broadcast đến tất cả users đang xem auction đó
          │
          ▼
    WebSocket gửi message
          │
          ├─→ User A: "BID_SUCCESS"
          ├─→ User B: "BID_UPDATE - bạn bị đè giá"
          ├─→ User C: "BID_UPDATE - giá mới"
          └─→ All: Cập nhật UI
```

---

## 3️⃣ CẤU TRÚC PROJECT

```
auction-system/
│
├── src/main/java/com/auction/
│   ├── AuctionApplication.java          # Main application
│   │
│   ├── controller/                      # Controllers
│   │   ├── AuthController.java          # Login/Register
│   │   ├── AuctionController.java       # CRUD auctions
│   │   ├── BidController.java           # Bidding APIs
│   │   ├── UserController.java          # User management
│   │   ├── AdminController.java         # Admin panel
│   │   └── PageController.java          # View pages
│   │
│   ├── websocket/                       # WebSocket
│   │   ├── WebSocketConfig.java         # Configuration
│   │   ├── WebSocketController.java     # Handle messages
│   │   └── WebSocketEventListener.java  # Connection events
│   │
│   ├── service/                         # Business Logic
│   │   ├── AuctionService.java
│   │   ├── BidService.java
│   │   ├── UserService.java
│   │   ├── AutoBidService.java
│   │   ├── WatchlistService.java
│   │   └── TimerService.java            # Countdown timers
│   │
│   ├── repository/                      # Data Access (JPA)
│   │   ├── UserRepository.java
│   │   ├── AuctionRepository.java
│   │   ├── BidRepository.java
│   │   ├── AutoBidRepository.java
│   │   └── WatchlistRepository.java
│   │
│   ├── model/                           # Entities
│   │   ├── User.java
│   │   ├── Auction.java
│   │   ├── Bid.java
│   │   ├── AutoBid.java
│   │   └── Watchlist.java
│   │
│   ├── dto/                             # Data Transfer Objects
│   │   ├── LoginRequest.java
│   │   ├── RegisterRequest.java
│   │   ├── BidRequest.java
│   │   ├── AuctionDTO.java
│   │   └── ApiResponse.java
│   │
│   ├── security/                        # Security
│   │   ├── SecurityConfig.java
│   │   ├── UserDetailsServiceImpl.java
│   │   └── PasswordEncoder.java
│   │
│   ├── util/                            # Utilities
│   │   ├── Constants.java
│   │   └── DateUtils.java
│   │
│   └── exception/                       # Exception Handling
│       ├── GlobalExceptionHandler.java
│       ├── AuctionNotFoundException.java
│       └── InvalidBidException.java
│
├── src/main/resources/
│   ├── application.properties           # Config (DB, port, etc.)
│   │
│   ├── static/                          # Static files
│   │   ├── css/
│   │   │   ├── style.css                # Custom CSS
│   │   │   └── bootstrap.min.css
│   │   ├── js/
│   │   │   ├── auction.js               # Auction logic
│   │   │   ├── websocket.js             # WebSocket client
│   │   │   ├── bid.js                   # Bidding functions
│   │   │   └── chart.js                 # Charts
│   │   └── images/                      # Images
│   │
│   └── templates/                       # Thymeleaf HTML
│       ├── index.html                   # Trang chủ
│       ├── login.html                   # Đăng nhập
│       ├── register.html                # Đăng ký
│       ├── dashboard.html               # Dashboard chính
│       ├── auction-detail.html          # Chi tiết đấu giá
│       ├── my-bids.html                 # Các món đã đấu
│       ├── won-items.html               # Các món đã thắng
│       ├── watchlist.html               # Danh sách theo dõi
│       ├── profile.html                 # Hồ sơ người dùng
│       └── admin/                       # Admin pages
│           ├── dashboard.html
│           ├── manage-auctions.html
│           ├── manage-users.html
│           └── statistics.html
│
└── pom.xml                              # Maven dependencies
```

---

## 4️⃣ CHỨC NĂNG HỆ THỐNG (MỨC 3)

### **A. NGƯỜI DÙNG THƯỜNG (End User)**

#### **1. Authentication (Xác thực)**
- ✅ Đăng ký tài khoản (username, email, password)
- ✅ Đăng nhập
- ✅ Đăng xuất
- ✅ Quên mật khẩu (optional)

#### **2. Quản lý Auction (Phiên đấu giá)**
- ✅ Xem danh sách tất cả auctions đang diễn ra
- ✅ Lọc auctions theo:
  - Trạng thái (ACTIVE/ENDED)
  - Khoảng giá
  - Thời gian còn lại
- ✅ Tìm kiếm auction theo tên
- ✅ Sắp xếp (theo giá, thời gian)
- ✅ Xem chi tiết auction:
  - Tên sản phẩm, mô tả
  - Giá khởi điểm
  - Giá hiện tại
  - Người đang dẫn đầu
  - Thời gian còn lại (countdown real-time)
  - Lịch sử 10 bids gần nhất

#### **3. Đặt giá (Bidding)**
- ✅ Đặt giá thủ công
- ✅ Nút tăng nhanh (+500k, +1tr, +5tr)
- ✅ Validate:
  - Giá phải cao hơn giá hiện tại
  - Phải đúng bước nhảy (bid increment)
  - Không thể bid trên auction của mình nếu đang dẫn đầu
- ✅ Nhận thông báo real-time khi:
  - Đặt giá thành công
  - Bị người khác đè giá
  - Auction sắp kết thúc (còn 1 phút)
  - Auction kết thúc (thắng/thua)

#### **4. Đấu giá tự động (Proxy Bidding)**
- ✅ Đặt giá tối đa
- ✅ Hệ thống tự động bid giúp khi có người đấu cao hơn
- ✅ Dừng khi đạt giá tối đa
- ✅ Xem/hủy auto-bid

#### **5. Watchlist (Theo dõi)**
- ✅ Thêm auction vào danh sách theo dõi
- ✅ Xóa khỏi watchlist
- ✅ Xem tất cả auctions đang theo dõi
- ✅ Nhận thông báo khi auction sắp kết thúc

#### **6. Lịch sử & Profile**
- ✅ Xem các auction đã tham gia đấu
- ✅ Xem các auction đã thắng
- ✅ Thống kê cá nhân:
  - Tổng số lần đấu
  - Số lần thắng
  - Tỷ lệ thắng
  - Tổng tiền đã chi
- ✅ Cập nhật thông tin cá nhân
- ✅ Đổi mật khẩu

---

### **B. QUẢN TRỊ VIÊN (Admin)**

#### **7. Quản lý Auctions**
- ✅ Tạo auction mới:
  - Nhập tên, mô tả
  - Giá khởi điểm
  - Giá dự trữ (reserve price)
  - Thời gian đấu giá (phút)
  - Bước nhảy giá
- ✅ Sửa auction (chỉ khi chưa có bid)
- ✅ Xóa auction (chỉ khi chưa có bid)
- ✅ Kết thúc auction sớm (force end)
- ✅ Gia hạn thời gian auction

#### **8. Quản lý Users**
- ✅ Xem danh sách tất cả users
- ✅ Khóa/mở khóa tài khoản
- ✅ Xem lịch sử hoạt động của user
- ✅ Xem thống kê user

#### **9. Dashboard & Statistics**
- ✅ Tổng quan hệ thống:
  - Tổng số users
  - Tổng số auctions (active/ended)
  - Tổng số bids hôm nay
  - Doanh thu (tổng giá trị auctions đã bán)
- ✅ Biểu đồ:
  - Số lượng bids theo giờ
  - Auctions theo trạng thái
  - Top bidders
- ✅ Nhật ký hệ thống (admin logs)

---

### **C. HỆ THỐNG (System)**

#### **10. Real-time Features**
- ✅ Countdown timer tự động cho mỗi auction
- ✅ Cập nhật giá real-time qua WebSocket
- ✅ Thông báo real-time khi có bid mới
- ✅ Auto-extend time:
  - Nếu có bid trong 10 giây cuối
  - Tự động gia hạn thêm 1 phút
  - Tối đa gia hạn 3 lần

#### **11. Tự động kết thúc Auction**
- ✅ Timer tự động check mỗi giây
- ✅ Khi hết giờ:
  - Đổi status → ENDED
  - Xác định winner
  - Gửi thông báo đến tất cả users đang xem
  - Gửi thông báo riêng cho winner
  - Lưu vào database

#### **12. Xử lý Concurrent Bids**
- ✅ Đồng bộ hóa (synchronization) khi xử lý bid
- ✅ Lock database row khi update
- ✅ Chỉ chấp nhận bid hợp lệ đầu tiên nếu nhiều người bid cùng lúc

---

## 5️⃣ DATABASE SCHEMA

### **Bảng 1: users (Người dùng)**
```
Columns:
- user_id (INT, PK, AUTO_INCREMENT)
- username (VARCHAR(50), UNIQUE, NOT NULL)
- email (VARCHAR(100), UNIQUE, NOT NULL)
- password_hash (VARCHAR(255), NOT NULL)
- full_name (VARCHAR(100))
- balance (DECIMAL(15,2), DEFAULT 0)
- role (ENUM('USER', 'ADMIN'), DEFAULT 'USER')
- is_active (BOOLEAN, DEFAULT TRUE)
- created_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
- updated_at (TIMESTAMP, ON UPDATE CURRENT_TIMESTAMP)
```

### **Bảng 2: auctions (Phiên đấu giá)**
```
Columns:
- auction_id (INT, PK, AUTO_INCREMENT)
- title (VARCHAR(200), NOT NULL)
- description (TEXT)
- starting_price (DECIMAL(15,2), NOT NULL)
- current_price (DECIMAL(15,2), NOT NULL)
- reserve_price (DECIMAL(15,2))
- bid_increment (DECIMAL(15,2), DEFAULT 500000)
- highest_bidder_id (INT, FK → users)
- start_time (TIMESTAMP, NOT NULL)
- end_time (TIMESTAMP, NOT NULL)
- status (ENUM('ACTIVE', 'ENDED', 'CANCELLED'), DEFAULT 'ACTIVE')
- total_bids (INT, DEFAULT 0)
- extend_count (INT, DEFAULT 0)
- created_by (INT, FK → users)
- created_at (TIMESTAMP)
```

### **Bảng 3: bids (Lịch sử đặt giá)**
```
Columns:
- bid_id (INT, PK, AUTO_INCREMENT)
- auction_id (INT, FK → auctions)
- user_id (INT, FK → users)
- bid_amount (DECIMAL(15,2), NOT NULL)
- is_auto_bid (BOOLEAN, DEFAULT FALSE)
- bid_time (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)

Indexes:
- (auction_id, bid_time DESC)
- (user_id, bid_time DESC)
```

### **Bảng 4: auto_bids (Đấu giá tự động)**
```
Columns:
- auto_bid_id (INT, PK, AUTO_INCREMENT)
- user_id (INT, FK → users)
- auction_id (INT, FK → auctions)
- max_amount (DECIMAL(15,2), NOT NULL)
- is_active (BOOLEAN, DEFAULT TRUE)
- created_at (TIMESTAMP)
```

### **Bảng 5: watchlist (Danh sách theo dõi)**
```
Columns:
- watchlist_id (INT, PK, AUTO_INCREMENT)
- user_id (INT, FK → users)
- auction_id (INT, FK → auctions)
- added_at (TIMESTAMP)

Unique Key: (user_id, auction_id)
```

### **Bảng 6: admin_logs (Nhật ký quản trị)**
```
Columns:
- log_id (INT, PK, AUTO_INCREMENT)
- admin_id (INT, FK → users)
- action (VARCHAR(100), NOT NULL)
- target_type (VARCHAR(50))
- target_id (INT)
- details (TEXT)
- ip_address (VARCHAR(45))
- timestamp (TIMESTAMP)
```

---

## 6️⃣ API ENDPOINTS

### **A. Authentication APIs**
```
POST   /api/auth/register        # Đăng ký
POST   /api/auth/login           # Đăng nhập
POST   /api/auth/logout          # Đăng xuất
GET    /api/auth/profile         # Lấy thông tin user
```

### **B. Auction APIs**
```
GET    /api/auctions             # Lấy danh sách auctions
GET    /api/auctions/{id}        # Chi tiết auction
POST   /api/auctions             # Tạo auction (Admin)
PUT    /api/auctions/{id}        # Sửa auction (Admin)
DELETE /api/auctions/{id}        # Xóa auction (Admin)
GET    /api/auctions/search      # Tìm kiếm
```

### **C. Bidding APIs**
```
POST   /api/bids                 # Đặt giá
GET    /api/bids/auction/{id}    # Lịch sử bids của 1 auction
GET    /api/bids/user            # Các bids của user hiện tại
POST   /api/bids/auto            # Đặt auto-bid
DELETE /api/bids/auto/{id}       # Hủy auto-bid
```

### **D. Watchlist APIs**
```
GET    /api/watchlist            # Lấy watchlist
POST   /api/watchlist/{id}       # Thêm vào watchlist
DELETE /api/watchlist/{id}       # Xóa khỏi watchlist
```

### **E. User APIs**
```
GET    /api/users/profile        # Thông tin cá nhân
PUT    /api/users/profile        # Cập nhật profile
PUT    /api/users/password       # Đổi mật khẩu
GET    /api/users/stats          # Thống kê cá nhân
GET    /api/users/won-auctions   # Các món đã thắng
```

### **F. Admin APIs**
```
GET    /api/admin/dashboard      # Dashboard stats
GET    /api/admin/users          # Quản lý users
PUT    /api/admin/users/{id}/ban # Ban user
GET    /api/admin/logs           # Xem logs
```

### **G. WebSocket Endpoint**
```
CONNECT  /ws                     # Kết nối WebSocket

Subscribe:
  /topic/auction/{id}            # Subscribe auction updates
  /user/queue/notifications      # Private notifications

Send:
  /app/bid                       # Gửi bid
  /app/join                      # Join auction room
  /app/leave                     # Leave auction room
```

---

## 7️⃣ WEBSOCKET MESSAGES

### **Client → Server**
```javascript
// Đặt giá
{
  type: "PLACE_BID",
  auctionId: 1,
  amount: 25000000
}

// Join auction room
{
  type: "JOIN_AUCTION",
  auctionId: 1
}

// Leave auction room
{
  type: "LEAVE_AUCTION",
  auctionId: 1
}
```

### **Server → Client**
```javascript
// Cập nhật giá mới
{
  type: "BID_UPDATE",
  auctionId: 1,
  bidderName: "Bob",
  newPrice: 25000000,
  timeLeft: 145
}

// Bạn bị đè giá
{
  type: "OUTBID_ALERT",
  auctionId: 1,
  newPrice: 26000000,
  newBidder: "Alice"
}

// Countdown tick
{
  type: "TIME_TICK",
  auctionId: 1,
  secondsLeft: 30
}

// Auction sắp kết thúc
{
  type: "AUCTION_ENDING_SOON",
  auctionId: 1,
  secondsLeft: 60
}

// Auction gia hạn
{
  type: "AUCTION_EXTENDED",
  auctionId: 1,
  newEndTime: "2025-10-28T15:05:00",
  reason: "Late bid received"
}

// Auction kết thúc
{
  type: "AUCTION_ENDED",
  auctionId: 1,
  winner: "Bob",
  finalPrice: 30000000,
  totalBids: 25
}
```

---

## 8️⃣ CÔNG NGHỆ NETWORK & PROTOCOL

### **A. HTTP/HTTPS (REST API)**
```
Protocol: HTTP/1.1
Method: GET, POST, PUT, DELETE
Format: JSON
Content-Type: application/json
Status Codes: 200, 201, 400, 401, 404, 500
```

### **B. WebSocket (Real-time)**
```
Protocol: WebSocket (ws:// hoặc wss://)
Sub-protocol: STOMP over SockJS
Message Format: JSON
Heartbeat: 10 seconds
```

**Tại sao dùng WebSocket?**
- ✅ **Hai chiều (bidirectional):** Server có thể push data xuống client
- ✅ **Real-time:** Độ trễ thấp (< 50ms)
- ✅ **Hiệu quả:** 1 connection duy trì, không phải poll liên tục
- ✅ **Phù hợp đấu giá:** Cần cập nhật giá ngay lập tức

**So sánh với alternatives:**
```
Long Polling:     Kém hiệu quả, nhiều HTTP requests
Server-Sent Events (SSE): Chỉ một chiều (server → client)
WebSocket:        ✅ Tốt nhất cho bidirectional real-time
```

---

## 9️⃣ SECURITY (Bảo mật)

### **Password Security**
```
Algorithm: BCrypt
Cost Factor: 12 rounds
Salt: Auto-generated per password
Storage: Chỉ lưu hash, không lưu plaintext
```

### **Session Management**
```
Method: HTTP Session (Spring Security)
Timeout: 30 minutes idle
Storage: In-memory (hoặc Redis nếu scale)
```

### **Input Validation**
```
Server-side validation:
- Annotation-based: @NotNull, @Min, @Max, @Email
- Custom validators
- SQL Injection prevention: JPA/Hibernate

Client-side validation:
- HTML5 validation attributes
- JavaScript validation
- Bootstrap form validation
```

### **HTTPS (Optional nhưng nên có)**
```
Certificate: Let's Encrypt (free)
Protocol: TLS 1.3
Ports: 443 (HTTPS), 8443 (WebSocket Secure)
```

---

## 🔟 DEPLOYMENT CONFIG (application.properties)

```properties
# Server
server.port=8080
spring.application.name=auction-system

# Database
spring.datasource.url=jdbc:mysql://localhost:3306/auction_db?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA/Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
spring.jpa.properties.hibernate.format_sql=true

# Thymeleaf
spring.thymeleaf.cache=false
spring.thymeleaf.prefix=classpath:/templates/
spring.thymeleaf.suffix=.html

# File Upload (nếu upload ảnh)
spring.servlet.multipart.max-file-size=5MB
spring.servlet.multipart.max-request-size=5MB

# Logging
logging.level.com.auction=DEBUG
logging.level.org.springframework.web=INFO
```

---

## 1️⃣1️⃣ ROADMAP THỰC HIỆN (6-7 NGÀY)

### **Ngày 1: Setup & Foundation**
- ✅ Tạo project Spring Boot (Spring Initializr)
- ✅ Cài đặt MySQL, tạo database
- ✅ Tạo entities (User, Auction, Bid)
- ✅ Tạo repositories (JPA)
- ✅ Test kết nối database

### **Ngày 2: Authentication & User Management**
- ✅ Implement Spring Security
- ✅ Tạo login/register pages
- ✅ BCrypt password hashing
- ✅ Session management
- ✅ User profile page

### **Ngày 3: Core Auction Logic**
- ✅ AuctionService: CRUD operations
- ✅ BidService: Validate & process bids
- ✅ REST APIs cho auctions và bids
- ✅ Dashboard page hiển thị danh sách auctions
- ✅ Auction detail page

### **Ngày 4: WebSocket Real-time**
- ✅ Config WebSocket + STOMP
- ✅ Implement broadcast bid updates
- ✅ Timer countdown (ScheduledExecutorService)
- ✅ Auto-extend logic
- ✅ Frontend JavaScript xử lý WebSocket

### **Ngày 5: Advanced Features**
- ✅ Auto-bidding (proxy bidding)
- ✅ Watchlist
- ✅ Bid history
- ✅ User statistics
- ✅ Search & filter

### **Ngày 6: Admin Panel**
- ✅ Admin dashboard
- ✅ Manage auctions
- ✅ Manage users
- ✅ Statistics & charts (Chart.js)
- ✅ Admin logs

### **Ngày 7: Polish & Testing**
- ✅ UI/UX improvements
- ✅ Responsive design testing
- ✅ Bug fixes
- ✅ Performance optimization
- ✅ Chuẩn bị presentation
- ✅ Demo script

---

## 1️⃣2️⃣ DEPENDENCIES (pom.xml)

```xml
<dependencies>
    <!-- Spring Boot Starter Web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    
    <!-- Spring Boot WebSocket -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-websocket</artifactId>
    </dependency>
    
    <!-- Spring Data JPA -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    
    <!-- Spring Security -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    
    <!-- Thymeleaf -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-thymeleaf</artifactId>
    </dependency>
    
    <!-- Thymeleaf + Spring Security -->
    <dependency>
        <groupId>org.thymeleaf.extras</groupId>
        <artifactId>thymeleaf-extras-springsecurity6</artifactId>
    </dependency>
    
    <!-- MySQL Driver -->
    <dependency>
        <groupId>com.mysql</groupId>
        <artifactId>mysql-connector-j</artifactId>
        <scope>runtime</scope>
    </dependency>
    
    <!-- Lombok (optional - giảm boilerplate code) -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <optional>true</optional>
    </dependency>
    
    <!-- Validation -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>
    
    <!-- DevTools (auto-reload) -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-devtools</artifactId>
        <scope>runtime</scope>
        <optional>true</optional>
    </dependency>
</dependencies>
```

---

## 1️⃣3️⃣ ĐIỂM NỔI BẬT VỀ LẬP TRÌNH MẠNG (Cho Presentation)

### **1. Kiến trúc Client-Server ⭐⭐⭐⭐⭐**
```
- Web Browser (Client) ↔ Spring Boot (Server) ↔ MySQL
- RESTful API architecture
- Stateless HTTP requests
- Session-based authentication
```

### **2. Protocol Design ⭐⭐⭐⭐⭐**
```
HTTP/REST API:
- JSON format
- CRUD operations
- Status codes

WebSocket Protocol:
- STOMP messaging
- Pub/Sub pattern
- Real-time bidirectional communication
```

### **3. Real-time Communication ⭐⭐⭐⭐⭐**
```
WebSocket:
- Full-duplex communication
- Low latency (< 50ms)
- Server push notifications
- Broadcast to multiple clients
```

### **4. Concurrency Control ⭐⭐⭐⭐**
```
JPA Optimistic Locking:
- @Version annotation
- Prevent race conditions
- Handle simultaneous bids

Synchronized methods:
- Thread-safe bid processing
```

### **5. Scalability ⭐⭐⭐**
```
Thread Pool:
- Spring Boot async execution
- Handle multiple concurrent users

Connection Pooling:
- HikariCP (default in Spring Boot)
- Efficient database connections
```

### **6. Security ⭐⭐⭐⭐**
```
Spring Security:
- Authentication & Authorization
- BCrypt password hashing
- CSRF protection
- Session management
```

---

## 📊 TỔNG KẾT STACK

```
┌─────────────────────────────────────────────┐
│         CÔNG NGHỆ SỬ DỤNG                   │
├─────────────────────────────────────────────┤
│ Backend:                                    │
│   ✅ Java 17                                │
│   ✅ Spring Boot 3.x                        │
│   ✅ Spring Web (REST API)                  │
│   ✅ Spring WebSocket (Real-time)           │
│   ✅ Spring Data JPA (ORM)                  │
│   ✅ Spring Security (Auth)                 │
│   ✅ Maven (Build)                          │
│                                             │
│ Frontend:                                   │
│   ✅ HTML5 + CSS3                           │
│   ✅ Bootstrap 5                            │
│   ✅ JavaScript ES6+                        │
│   ✅ Thymeleaf (Template)                   │
│   ✅ SockJS + STOMP (WebSocket)             │
│   ✅ Chart.js (Graphs)                      │
│                                             │
│ Database:                                   │
│   ✅ MySQL 8.0                              │
│   ✅ 6 tables                               │
│                                             │
│ Protocol:                                   │
│   ✅ HTTP/REST (JSON)                       │
│   ✅ WebSocket (STOMP)                      │
│                                             │
│ Security:                                   │
│   ✅ BCrypt hashing                         │
│   ✅ Spring Security                        │
│   ✅ Session-based auth                     │
└─────────────────────────────────────────────┘
```

---

## ✅ CHECKLIST HOÀN THÀNH

### **Backend (Server)**
- [ ] Setup Spring Boot project
- [ ] Config MySQL connection
- [ ] Tạo 6 entities (User, Auction, Bid, AutoBid, Watchlist, AdminLog)
- [ ] Tạo 6 repositories (JPA)
- [ ] Implement Spring Security
- [ ] Tạo REST Controllers (Auth, Auction, Bid, User, Admin)
- [ ] Config WebSocket + STOMP
- [ ] Implement WebSocket controller
- [ ] Tạo Services (Business logic)
- [ ] Implement timer countdown
- [ ] Implement auto-extend logic
- [ ] Implement auto-bidding
- [ ] Exception handling
- [ ] Logging

### **Frontend (Client)**
- [ ] Tạo HTML pages (10+ pages)
- [ ] Style với Bootstrap
- [ ] JavaScript cho WebSocket
- [ ] JavaScript cho bidding
- [ ] Real-time UI updates
- [ ] Charts (Chart.js)
- [ ] Form validation
- [ ] Responsive design

### **Database**
- [ ] Tạo database schema (6 tables)
- [ ] Insert sample data
- [ ] Test queries

### **Testing & Deploy**
- [ ] Test chức năng cơ bản
- [ ] Test concurrent bidding
- [ ] Test real-time updates
- [ ] Test với nhiều users
- [ ] Bug fixes
- [ ] Optimization

### **Presentation**
- [ ] Slides (10-15 slides)
- [ ] Demo script
- [ ] Backup plan (video)

---

## 🎯 KẾT LUẬN

Bạn sẽ xây dựng một **Web Application hoàn chỉnh** với:

✅ **Backend:** Spring Boot + MySQL  
✅ **Frontend:** HTML/CSS/Bootstrap + JavaScript  
✅ **Real-time:** WebSocket  
✅ **Security:** Spring Security + BCrypt  
✅ **Architecture:** MVC Pattern  
✅ **Protocol:** REST API + WebSocket  

**Thời gian:** 6-7 ngày  
**Điểm dự kiến:** 8.5-9.0/10  
**Mức độ:** Khá - đủ để làm BTL

---

**Bạn đã rõ về stack công nghệ và roadmap chưa? Có phần nào cần giải thích thêm không?** 😊

```yaml
Ngôn ngữ:
  - Java 17 (hoặc Java 11+)

Framework:
  - Spring Boot 3.x
  - Spring Web (REST API)
  - Spring WebSocket (Real-time communication)
  - Spring Data JPA (ORM - Object Relational Mapping)
  - Spring Security (Authentication & Authorization)

Database:
  - MySQL 8.0
  - Driver: mysql-connector-java

Build Tool:
  - Maven

Security:
  - BCrypt (Password hashing)
  - JWT (JSON Web Token) - optional
  - Spring Security

Server:
  - Embedded Tomcat (đi kèm Spring Boot)
  - Port: 8080 (HTTP/REST)
  - Port: 8080/ws (WebSocket endpoint)
```

```yaml
Core:
  - HTML5
  - CSS3
  - JavaScript (ES6+)

Framework/Library:
  - Bootstrap 5.3 (UI Framework)
  - jQuery 3.7 (DOM manipulation - optional)
  - SockJS + STOMP.js (WebSocket client)
  - Chart.js (Biểu đồ)
  - Font Awesome (Icons)

Template Engine:
  - Thymeleaf (Server-side rendering)

Architecture:
  - Responsive Design
  - Single Page Application style
```

```yaml
Database Management System:
  - MySQL 8.0

Tables (6 bảng):
  1. users           (Người dùng)
  2. auctions        (Phiên đấu giá)
  3. bids            (Lịch sử đặt giá)
  4. auto_bids       (Đấu giá tự động)
  5. watchlist       (Danh sách theo dõi)
  6. admin_logs      (Nhật ký quản trị)

Charset: utf8mb4
Storage Engine: InnoDB
```

```plaintext
┌─────────────────────────────────────────────────────┐
│                   BROWSER (Client)                  │
│  ┌─────────────────────────────────────────────┐   │
│  │  HTML + CSS + Bootstrap + JavaScript        │   │
│  │  - Thymeleaf rendered pages                 │   │
│  │  - AJAX calls to REST API                   │   │
│  │  - WebSocket for real-time                  │   │
│  └────────┬────────────────────────────────────┘   │
└───────────┼──────────────────────────────────────────┘
            │
            │ HTTP/HTTPS (REST API)
            │ WebSocket (Real-time)
            │
┌───────────▼──────────────────────────────────────────┐
│         SPRING BOOT APPLICATION (Backend)            │
│  ┌──────────────────────────────────────────────┐   │
│  │  CONTROLLER LAYER                            │   │
│  │  - REST Controllers (API endpoints)          │   │
│  │  - WebSocket Controllers (Real-time)         │   │
│  │  - View Controllers (Page rendering)         │   │
│  └─────────┬────────────────────────────────────┘   │
│            │                                          │
│  ┌─────────▼────────────────────────────────────┐   │
│  │  SERVICE LAYER (Business Logic)              │   │
│  │  - AuctionService                            │   │
│  │  - BidService                                │   │
│  │  - UserService                               │   │
│  │  - AuthService                               │   │
│  └─────────┬────────────────────────────────────┘   │
│            │                                          │
│  ┌─────────▼────────────────────────────────────┐   │
│  │  REPOSITORY LAYER (Data Access)              │   │
│  │  - Spring Data JPA Repositories              │   │
│  │  - CRUD operations                           │   │
│  └─────────┬────────────────────────────────────┘   │
│            │                                          │
│  ┌─────────▼────────────────────────────────────┐   │
│  │  MODEL LAYER (Entities)                      │   │
│  │  - User, Auction, Bid, etc.                  │   │
│  │  - JPA annotations                           │   │
│  └──────────────────────────────────────────────┘   │
└───────────┼──────────────────────────────────────────┘
            │ JDBC
            │
┌───────────▼──────────────────────────────────────────┐
│               MYSQL DATABASE                         │
│  Tables: users, auctions, bids, auto_bids, etc.     │
└──────────────────────────────────────────────────────┘
```

```plaintext
User A đặt giá
    │
    ▼
Browser gửi WebSocket message
    │
    ▼
WebSocket Controller nhận
    │
    ▼
AuctionService xử lý bid
    │
    ├─→ Validate bid
    ├─→ Lưu vào Database
    └─→ Broadcast đến tất cả users đang xem auction đó
          │
          ▼
    WebSocket gửi message
          │
          ├─→ User A: "BID_SUCCESS"
          ├─→ User B: "BID_UPDATE - bạn bị đè giá"
          ├─→ User C: "BID_UPDATE - giá mới"
          └─→ All: Cập nhật UI
```

```plaintext
auction-system/
│
├── src/main/java/com/auction/
│   ├── AuctionApplication.java          # Main application
│   │
│   ├── controller/                      # Controllers
│   │   ├── AuthController.java          # Login/Register
│   │   ├── AuctionController.java       # CRUD auctions
│   │   ├── BidController.java           # Bidding APIs
│   │   ├── UserController.java          # User management
│   │   ├── AdminController.java         # Admin panel
│   │   └── PageController.java          # View pages
│   │
│   ├── websocket/                       # WebSocket
│   │   ├── WebSocketConfig.java         # Configuration
│   │   ├── WebSocketController.java     # Handle messages
│   │   └── WebSocketEventListener.java  # Connection events
│   │
│   ├── service/                         # Business Logic
│   │   ├── AuctionService.java
│   │   ├── BidService.java
│   │   ├── UserService.java
│   │   ├── AutoBidService.java
│   │   ├── WatchlistService.java
│   │   └── TimerService.java            # Countdown timers
│   │
│   ├── repository/                      # Data Access (JPA)
│   │   ├── UserRepository.java
│   │   ├── AuctionRepository.java
│   │   ├── BidRepository.java
│   │   ├── AutoBidRepository.java
│   │   └── WatchlistRepository.java
│   │
│   ├── model/                           # Entities
│   │   ├── User.java
│   │   ├── Auction.java
│   │   ├── Bid.java
│   │   ├── AutoBid.java
│   │   └── Watchlist.java
│   │
│   ├── dto/                             # Data Transfer Objects
│   │   ├── LoginRequest.java
│   │   ├── RegisterRequest.java
│   │   ├── BidRequest.java
│   │   ├── AuctionDTO.java
│   │   └── ApiResponse.java
│   │
│   ├── security/                        # Security
│   │   ├── SecurityConfig.java
│   │   ├── UserDetailsServiceImpl.java
│   │   └── PasswordEncoder.java
│   │
│   ├── util/                            # Utilities
│   │   ├── Constants.java
│   │   └── DateUtils.java
│   │
│   └── exception/                       # Exception Handling
│       ├── GlobalExceptionHandler.java
│       ├── AuctionNotFoundException.java
│       └── InvalidBidException.java
│
├── src/main/resources/
│   ├── application.properties           # Config (DB, port, etc.)
│   │
│   ├── static/                          # Static files
│   │   ├── css/
│   │   │   ├── style.css                # Custom CSS
│   │   │   └── bootstrap.min.css
│   │   ├── js/
│   │   │   ├── auction.js               # Auction logic
│   │   │   ├── websocket.js             # WebSocket client
│   │   │   ├── bid.js                   # Bidding functions
│   │   │   └── chart.js                 # Charts
│   │   └── images/                      # Images
│   │
│   └── templates/                       # Thymeleaf HTML
│       ├── index.html                   # Trang chủ
│       ├── login.html                   # Đăng nhập
│       ├── register.html                # Đăng ký
│       ├── dashboard.html               # Dashboard chính
│       ├── auction-detail.html          # Chi tiết đấu giá
│       ├── my-bids.html                 # Các món đã đấu
│       ├── won-items.html               # Các món đã thắng
│       ├── watchlist.html               # Danh sách theo dõi
│       ├── profile.html                 # Hồ sơ người dùng
│       └── admin/                       # Admin pages
│           ├── dashboard.html
│           ├── manage-auctions.html
│           ├── manage-users.html
│           └── statistics.html
│
└── pom.xml                              # Maven dependencies
```

```plaintext
Columns:
- user_id (INT, PK, AUTO_INCREMENT)
- username (VARCHAR(50), UNIQUE, NOT NULL)
- email (VARCHAR(100), UNIQUE, NOT NULL)
- password_hash (VARCHAR(255), NOT NULL)
- full_name (VARCHAR(100))
- balance (DECIMAL(15,2), DEFAULT 0)
- role (ENUM('USER', 'ADMIN'), DEFAULT 'USER')
- is_active (BOOLEAN, DEFAULT TRUE)
- created_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
- updated_at (TIMESTAMP, ON UPDATE CURRENT_TIMESTAMP)
```

```plaintext
Columns:
- auction_id (INT, PK, AUTO_INCREMENT)
- title (VARCHAR(200), NOT NULL)
- description (TEXT)
- starting_price (DECIMAL(15,2), NOT NULL)
- current_price (DECIMAL(15,2), NOT NULL)
- reserve_price (DECIMAL(15,2))
- bid_increment (DECIMAL(15,2), DEFAULT 500000)
- highest_bidder_id (INT, FK → users)
- start_time (TIMESTAMP, NOT NULL)
- end_time (TIMESTAMP, NOT NULL)
- status (ENUM('ACTIVE', 'ENDED', 'CANCELLED'), DEFAULT 'ACTIVE')
- total_bids (INT, DEFAULT 0)
- extend_count (INT, DEFAULT 0)
- created_by (INT, FK → users)
- created_at (TIMESTAMP)
```

```plaintext
Columns:
- bid_id (INT, PK, AUTO_INCREMENT)
- auction_id (INT, FK → auctions)
- user_id (INT, FK → users)
- bid_amount (DECIMAL(15,2), NOT NULL)
- is_auto_bid (BOOLEAN, DEFAULT FALSE)
- bid_time (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)

Indexes:
- (auction_id, bid_time DESC)
- (user_id, bid_time DESC)
```

```plaintext
Columns:
- auto_bid_id (INT, PK, AUTO_INCREMENT)
- user_id (INT, FK → users)
- auction_id (INT, FK → auctions)
- max_amount (DECIMAL(15,2), NOT NULL)
- is_active (BOOLEAN, DEFAULT TRUE)
- created_at (TIMESTAMP)
```

```plaintext
Columns:
- watchlist_id (INT, PK, AUTO_INCREMENT)
- user_id (INT, FK → users)
- auction_id (INT, FK → auctions)
- added_at (TIMESTAMP)

Unique Key: (user_id, auction_id)
```

```plaintext
Columns:
- log_id (INT, PK, AUTO_INCREMENT)
- admin_id (INT, FK → users)
- action (VARCHAR(100), NOT NULL)
- target_type (VARCHAR(50))
- target_id (INT)
- details (TEXT)
- ip_address (VARCHAR(45))
- timestamp (TIMESTAMP)
```

```plaintext
POST   /api/auth/register        # Đăng ký
POST   /api/auth/login           # Đăng nhập
POST   /api/auth/logout          # Đăng xuất
GET    /api/auth/profile         # Lấy thông tin user
```

```plaintext
GET    /api/auctions             # Lấy danh sách auctions
GET    /api/auctions/{id}        # Chi tiết auction
POST   /api/auctions             # Tạo auction (Admin)
PUT    /api/auctions/{id}        # Sửa auction (Admin)
DELETE /api/auctions/{id}        # Xóa auction (Admin)
GET    /api/auctions/search      # Tìm kiếm
```

```plaintext
POST   /api/bids                 # Đặt giá
GET    /api/bids/auction/{id}    # Lịch sử bids của 1 auction
GET    /api/bids/user            # Các bids của user hiện tại
POST   /api/bids/auto            # Đặt auto-bid
DELETE /api/bids/auto/{id}       # Hủy auto-bid
```

```plaintext
GET    /api/watchlist            # Lấy watchlist
POST   /api/watchlist/{id}       # Thêm vào watchlist
DELETE /api/watchlist/{id}       # Xóa khỏi watchlist
```

```plaintext
GET    /api/users/profile        # Thông tin cá nhân
PUT    /api/users/profile        # Cập nhật profile
PUT    /api/users/password       # Đổi mật khẩu
GET    /api/users/stats          # Thống kê cá nhân
GET    /api/users/won-auctions   # Các món đã thắng
```

```plaintext
GET    /api/admin/dashboard      # Dashboard stats
GET    /api/admin/users          # Quản lý users
PUT    /api/admin/users/{id}/ban # Ban user
GET    /api/admin/logs           # Xem logs
```

```plaintext
CONNECT  /ws                     # Kết nối WebSocket

Subscribe:
  /topic/auction/{id}            # Subscribe auction updates
  /user/queue/notifications      # Private notifications

Send:
  /app/bid                       # Gửi bid
  /app/join                      # Join auction room
  /app/leave                     # Leave auction room
```

```javascript
// Đặt giá
{
  type: "PLACE_BID",
  auctionId: 1,
  amount: 25000000
}

// Join auction room
{
  type: "JOIN_AUCTION",
  auctionId: 1
}

// Leave auction room
{
  type: "LEAVE_AUCTION",
  auctionId: 1
}
```

```javascript
// Cập nhật giá mới
{
  type: "BID_UPDATE",
  auctionId: 1,
  bidderName: "Bob",
  newPrice: 25000000,
  timeLeft: 145
}

// Bạn bị đè giá
{
  type: "OUTBID_ALERT",
  auctionId: 1,
  newPrice: 26000000,
  newBidder: "Alice"
}

// Countdown tick
{
  type: "TIME_TICK",
  auctionId: 1,
  secondsLeft: 30
}

// Auction sắp kết thúc
{
  type: "AUCTION_ENDING_SOON",
  auctionId: 1,
  secondsLeft: 60
}

// Auction gia hạn
{
  type: "AUCTION_EXTENDED",
  auctionId: 1,
  newEndTime: "2025-10-28T15:05:00",
  reason: "Late bid received"
}

// Auction kết thúc
{
  type: "AUCTION_ENDED",
  auctionId: 1,
  winner: "Bob",
  finalPrice: 30000000,
  totalBids: 25
}
```

```plaintext
Protocol: HTTP/1.1
Method: GET, POST, PUT, DELETE
Format: JSON
Content-Type: application/json
Status Codes: 200, 201, 400, 401, 404, 500
```

```plaintext
Protocol: WebSocket (ws:// hoặc wss://)
Sub-protocol: STOMP over SockJS
Message Format: JSON
Heartbeat: 10 seconds
```

```plaintext
Long Polling:     Kém hiệu quả, nhiều HTTP requests
Server-Sent Events (SSE): Chỉ một chiều (server → client)
WebSocket:        ✅ Tốt nhất cho bidirectional real-time
```

```plaintext
Algorithm: BCrypt
Cost Factor: 12 rounds
Salt: Auto-generated per password
Storage: Chỉ lưu hash, không lưu plaintext
```

```plaintext
Method: HTTP Session (Spring Security)
Timeout: 30 minutes idle
Storage: In-memory (hoặc Redis nếu scale)
```

```plaintext
Server-side validation:
- Annotation-based: @NotNull, @Min, @Max, @Email
- Custom validators
- SQL Injection prevention: JPA/Hibernate

Client-side validation:
- HTML5 validation attributes
- JavaScript validation
- Bootstrap form validation
```

```plaintext
Certificate: Let's Encrypt (free)
Protocol: TLS 1.3
Ports: 443 (HTTPS), 8443 (WebSocket Secure)
```

```properties
# Server
server.port=8080
spring.application.name=auction-system

# Database
spring.datasource.url=jdbc:mysql://localhost:3306/auction_db?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA/Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
spring.jpa.properties.hibernate.format_sql=true

# Thymeleaf
spring.thymeleaf.cache=false
spring.thymeleaf.prefix=classpath:/templates/
spring.thymeleaf.suffix=.html

# File Upload (nếu upload ảnh)
spring.servlet.multipart.max-file-size=5MB
spring.servlet.multipart.max-request-size=5MB

# Logging
logging.level.com.auction=DEBUG
logging.level.org.springframework.web=INFO
```

```xml
<dependencies>
    <!-- Spring Boot Starter Web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    
    <!-- Spring Boot WebSocket -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-websocket</artifactId>
    </dependency>
    
    <!-- Spring Data JPA -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    
    <!-- Spring Security -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    
    <!-- Thymeleaf -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-thymeleaf</artifactId>
    </dependency>
    
    <!-- Thymeleaf + Spring Security -->
    <dependency>
        <groupId>org.thymeleaf.extras</groupId>
        <artifactId>thymeleaf-extras-springsecurity6</artifactId>
    </dependency>
    
    <!-- MySQL Driver -->
    <dependency>
        <groupId>com.mysql</groupId>
        <artifactId>mysql-connector-j</artifactId>
        <scope>runtime</scope>
    </dependency>
    
    <!-- Lombok (optional - giảm boilerplate code) -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <optional>true</optional>
    </dependency>
    
    <!-- Validation -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>
    
    <!-- DevTools (auto-reload) -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-devtools</artifactId>
        <scope>runtime</scope>
        <optional>true</optional>
    </dependency>
</dependencies>
```

```plaintext
- Web Browser (Client) ↔ Spring Boot (Server) ↔ MySQL
- RESTful API architecture
- Stateless HTTP requests
- Session-based authentication
```

```plaintext
HTTP/REST API:
- JSON format
- CRUD operations
- Status codes

WebSocket Protocol:
- STOMP messaging
- Pub/Sub pattern
- Real-time bidirectional communication
```

```plaintext
WebSocket:
- Full-duplex communication
- Low latency (< 50ms)
- Server push notifications
- Broadcast to multiple clients
```

```plaintext
JPA Optimistic Locking:
- @Version annotation
- Prevent race conditions
- Handle simultaneous bids

Synchronized methods:
- Thread-safe bid processing
```

```plaintext
Thread Pool:
- Spring Boot async execution
- Handle multiple concurrent users

Connection Pooling:
- HikariCP (default in Spring Boot)
- Efficient database connections
```

```plaintext
Spring Security:
- Authentication & Authorization
- BCrypt password hashing
- CSRF protection
- Session management
```

```plaintext
┌─────────────────────────────────────────────┐
│         CÔNG NGHỆ SỬ DỤNG                   │
├─────────────────────────────────────────────┤
│ Backend:                                    │
│   ✅ Java 17                                │
│   ✅ Spring Boot 3.x                        │
│   ✅ Spring Web (REST API)                  │
│   ✅ Spring WebSocket (Real-time)           │
│   ✅ Spring Data JPA (ORM)                  │
│   ✅ Spring Security (Auth)                 │
│   ✅ Maven (Build)                          │
│                                             │
│ Frontend:                                   │
│   ✅ HTML5 + CSS3                           │
│   ✅ Bootstrap 5                            │
│   ✅ JavaScript ES6+                        │
│   ✅ Thymeleaf (Template)                   │
│   ✅ SockJS + STOMP (WebSocket)             │
│   ✅ Chart.js (Graphs)                      │
│                                             │
│ Database:                                   │
│   ✅ MySQL 8.0                              │
│   ✅ 6 tables                               │
│                                             │
│ Protocol:                                   │
│   ✅ HTTP/REST (JSON)                       │
│   ✅ WebSocket (STOMP)                      │
│                                             │
│ Security:                                   │
│   ✅ BCrypt hashing                         │
│   ✅ Spring Security                        │
│   ✅ Session-based auth                     │
└─────────────────────────────────────────────┘
```

