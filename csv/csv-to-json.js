const fs = require('fs');
const csv = require('csv');
const bcrypt = require('bcrypt');

fs.readFile('./account_table.csv', (error, data) => {
  csv.parse(data, (error, data) => {
    let allAccounts = [];
    for (var i = 1; i < data.length; i++) {
      let row = data[i];
      let account = {
        email: row[2],
        first_name: row[0],
        last_name: row[1],
        password: bcrypt.hashSync(row[3], 10),
        is_landlord: row[4]
      }
      allAccounts.push(account);
    }
    fs.writeFile('../data_sets/account.json', JSON.stringify(allAccounts), error => {
      console.log('account.json created');
    });
  });
});


fs.readFile('./property_w_location.csv', (error, data) => {
  csv.parse(data, (error, data) => {
    let allLocations = [];
    for (var i = 1; i < data.length; i++) {
      let row = data[i];
      let location = {
        city: row[1],
        state: row[2],
        zip_code: row[3]
      }
      allLocations.push(location);
    }
    fs.writeFile('../data_sets/location.json', JSON.stringify(allLocations), error => {
      console.log('location.json created');
    });
  });
});


fs.readFile('./property_w_location.csv', (error, data) => {
  csv.parse(data, (error, data) => {
    let allProperties = [];
    for (var i = 1; i < data.length; i++) {
      let row = data[i];
      let property = {
        address: row[0],
        rent_price: row[4],
        bedrooms: row[5],
        bathrooms: row[6],
        square_footage: row[7],
        image: row[8],
        landlord_id: row[9],
        location_id: i
      }
      allProperties.push(property);
    }
    fs.writeFile('../data_sets/property.json', JSON.stringify(allProperties), error => {
      console.log('property.json created');
    });
  });
});


fs.readFile('./documents_table.csv', (error, data) => {
  csv.parse(data, (error, data) => {
    let allDocuments = [];
    for (var i = 1; i < data.length; i++) {
      let row = data[i];
      let lease = {
        title: row[0],
        created_on: row[1],
        document_url: row[2],
        property_id: row[3]
      }
      allDocuments.push(lease);
    }
    fs.writeFile('../data_sets/documents.json', JSON.stringify(allDocuments), error => {
      console.log('documents.json created');
    });
  });
});

fs.readFile('./maintenance.csv', (error, data) => {
  csv.parse(data, (error, data) => {
    let allMaintenance = [];
    for (var i = 1; i < data.length; i++) {
      let row = data[i];
      let maintenance = {
        title: row[0],
        request: row[1],
        status: row[2],
        property_id: row[3],
        tenant_id: row[4]
      }
      allMaintenance.push(maintenance);
    }
    fs.writeFile('../data_sets/maintenance.json', JSON.stringify(allMaintenance), error => {
      console.log('maintenance.json created');
    });
  });
});

fs.readFile('./tenant_property_table.csv', (error, data) => {
  csv.parse(data, (error, data) => {
    let tenantPropertyJoin = [];
    for (var i = 1; i < data.length; i++) {
      let row = data[i];
      let join = {
        tenant_id: row[0],
        property_id: row[1]
      }
      tenantPropertyJoin.push(join);
    }
    fs.writeFile('../data_sets/tenant_property.json', JSON.stringify(tenantPropertyJoin), error => {
      console.log('tenant_property.json created');
    });
  });
});
