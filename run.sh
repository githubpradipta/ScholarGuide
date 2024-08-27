#!/bin/bash

# Navigate to the client folder and run the development server
echo "Starting client..."
cd client || { echo "Client folder not found!"; exit 1; }
npm run dev &

# Wait for the client server to start
sleep 5

# Navigate back to the root and then to the server folder, and start the server
echo "Starting server..."
cd ../server || { echo "Server folder not found!"; exit 1; }
npm start
