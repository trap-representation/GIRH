const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from React build
app.use(express.static(path.join(__dirname, '../client/dist')));

// File paths for different JSON data
const filePaths = {
  patentLists: path.join(__dirname, 'patentLists.json'),
  projects: path.join(__dirname, 'projects.json'),
  intellectualproperty: path.join(__dirname, 'intellectualproperty.json'),
  fundingHistory: path.join(__dirname, 'fundinghistory.json'),
  startup_PatentLists: path.join(__dirname, 'startup_PatentLists.json'),
  startup_projects: path.join(__dirname, 'startup_projects.json'),
  startup_intellectualproperty: path.join(__dirname, 'startup_intellectualproperty.json'),
  startup_fundingHistory: path.join(__dirname, 'startup_fundingHistory.json'),
};

// Helper function to read JSON data from a file
const readJsonFile = (filePath, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: `Error reading file: ${filePath}` });
    }
    try {
      const parsedData = JSON.parse(data);
      return res.json(parsedData);
    } catch (parseError) {
      return res.status(500).json({ message: 'Error parsing JSON data' });
    }
  });
};

// Helper function to write JSON data to a file
const writeJsonFile = (filePath, newData, res) => {
  fs.writeFile(filePath, JSON.stringify(newData, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ message: `Error saving to file: ${filePath}` });
    }
    return res.status(201).json(newData);
  });
};

// API route to get all items (generic)
app.get('/api/:type', (req, res) => {
  const { type } = req.params;
  const filePath = filePaths[type];
  
  if (!filePath) {
    return res.status(404).json({ message: `Unknown data type: ${type}` });
  }

  readJsonFile(filePath, res);
});

// API route to add a new item (generic)
app.post('/api/:type', (req, res) => {
  const { type } = req.params;
  const newItem = req.body;
  const filePath = filePaths[type];

  if (!filePath) {
    return res.status(404).json({ message: `Unknown data type: ${type}` });
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: `Error reading file: ${filePath}` });
    }
    try {
      const items = JSON.parse(data);

      // Add a unique ID to each new item
      newItem.id = items.length ? items[items.length - 1].id + 1 : 1;
      items.push(newItem);

      writeJsonFile(filePath, items, res);
    } catch (parseError) {
      return res.status(500).json({ message: 'Error parsing JSON data' });
    }
  });
});

// API route to update an existing item (generic)
app.put('/api/:type/:id', (req, res) => {
  const { type, id } = req.params;
  const updatedItem = req.body;
  const filePath = filePaths[type];

  if (!filePath) {
    return res.status(404).json({ message: `Unknown data type: ${type}` });
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: `Error reading file: ${filePath}` });
    }
    try {
      const items = JSON.parse(data);
      const itemIndex = items.findIndex(item => item.id == id);

      if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found' });
      }

      items[itemIndex] = { ...items[itemIndex], ...updatedItem };

      writeJsonFile(filePath, items, res);
    } catch (parseError) {
      return res.status(500).json({ message: 'Error parsing JSON data' });
    }
  });
});

// API route to delete an item (generic)
app.delete('/api/:type/:id', (req, res) => {
  const { type, id } = req.params;
  const filePath = filePaths[type];

  if (!filePath) {
    return res.status(404).json({ message: `Unknown data type: ${type}` });
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: `Error reading file: ${filePath}` });
    }
    try {
      const items = JSON.parse(data);
      const filteredItems = items.filter(item => item.id != id);

      writeJsonFile(filePath, filteredItems, res);
    } catch (parseError) {
      return res.status(500).json({ message: 'Error parsing JSON data' });
    }
  });
});

// Serve the React application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
