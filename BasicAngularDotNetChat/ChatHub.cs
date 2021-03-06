﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace BasicAngularDotNetChat
{
    public class ChatHub : Hub
    {
        public void SendMessage(string name, string message)
        {
            Guid id = Guid.NewGuid();
            Clients.All.broadcastMessage(id, name, message, String.Format("{0:t}", DateTime.Now));
        }
    }
}