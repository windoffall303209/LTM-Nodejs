package com.auction.websocket;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import java.util.HashMap;
import java.util.Map;

/**
 * WebSocket Controller
 * Xử lý real-time bidirectional communication
 * 
 * Client subscribe: /topic/auction/{auctionId}
 * Client send to: /app/join, /app/leave, /app/bid
 */
@Controller
@RequiredArgsConstructor
@Slf4j
public class WebSocketController {

    private final SimpMessagingTemplate messagingTemplate;

    /**
     * Client join auction room
     * Client gửi: /app/join/{auctionId}
     * Server broadcast: /topic/auction/{auctionId}
     */
    @MessageMapping("/join/{auctionId}")
    @SendTo("/topic/auction/{auctionId}")
    public Map<String, Object> joinAuction(@DestinationVariable Long auctionId, Map<String, Object> message) {
        log.info("User {} joined auction {}", message.get("username"), auctionId);
        
        Map<String, Object> response = new HashMap<>();
        response.put("type", "USER_JOINED");
        response.put("username", message.get("username"));
        response.put("auctionId", auctionId);
        
        return response;
    }

    /**
     * Client leave auction room
     * Client gửi: /app/leave/{auctionId}
     */
    @MessageMapping("/leave/{auctionId}")
    @SendTo("/topic/auction/{auctionId}")
    public Map<String, Object> leaveAuction(@DestinationVariable Long auctionId, Map<String, Object> message) {
        log.info("User {} left auction {}", message.get("username"), auctionId);
        
        Map<String, Object> response = new HashMap<>();
        response.put("type", "USER_LEFT");
        response.put("username", message.get("username"));
        response.put("auctionId", auctionId);
        
        return response;
    }

    /**
     * Send notification to specific user
     */
    public void sendToUser(String username, String destination, Object payload) {
        messagingTemplate.convertAndSendToUser(username, destination, payload);
    }

    /**
     * Broadcast to all users in auction
     */
    public void broadcastToAuction(Long auctionId, Object payload) {
        messagingTemplate.convertAndSend("/topic/auction/" + auctionId, payload);
    }
}

