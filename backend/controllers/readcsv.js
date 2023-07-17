const fs = require('fs');
const Papa = require('papaparse');


const csvFilePath = './user_data.csv';

const calculateAverages = (csvData) => {
  let userCount = 0;
  let fieldSums = {};
  let socialCounts = {
    Instagram: 0,
    Facebook: 0,
    Twitter: 0
  };
  let ageGroups = {
    '15-20': 0,
    '20-30': 0,
    '30-50': 0,
    '50-70': 0,
    '70+': 0
  };
  let activeMonthCounts = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0
  };
  let pageViewCounts = {
    Home: 0,
    About: 0,
    Our_Work: 0,
    Get_Involved: 0,
    Blog: 0,
    Contact_Us: 0,
    Donate: 0
  };

  for (let i = 0; i < csvData.length; i++) {
    const row = csvData[i];

    userCount++;

    // Count occurrences of social media platforms
    const socialMedia = row['Social'];

    if (/instagram/i.test(socialMedia)) {
      socialCounts.Instagram++;
    }
    if (/facebook/i.test(socialMedia)) {
      socialCounts.Facebook++;
    }
    if (/twitter/i.test(socialMedia)) {
      socialCounts.Twitter++;
    }

    // Count occurrences in age groups
    const age = parseInt(row['Age']);
    if (age >= 15 && age <= 20) {
      ageGroups['15-20']++;
    } else if (age > 20 && age <= 30) {
      ageGroups['20-30']++;
    } else if (age > 30 && age <= 50) {
      ageGroups['30-50']++;
    } else if (age > 50 && age <= 70) {
      ageGroups['50-70']++;
    } else if (age > 70) {
      ageGroups['70+']++;
    }

    // Count occurrences of active months
    const activeMonths = parseInt(row['Active_Months']);
    if (activeMonths >= 1 && activeMonths <= 12) {
      activeMonthCounts[activeMonths]++;
    }

    // Count occurrences of page views
    const PageView = row['Page View'];

    if (/Home/i.test(PageView)) {
      pageViewCounts.Home++;
    }
    if (/About/i.test(PageView)) {
      pageViewCounts.About++;
    }
    if (/Our_Work/i.test(PageView)) {
      pageViewCounts.Our_Work++;
    }
    if (/Get_Involved/i.test(PageView)) {
      pageViewCounts.Get_Involved++;
    }
    if (/Blog/i.test(PageView)) {
      pageViewCounts.Blog++;
    }
    if (/Contact_Us/i.test(PageView)) {
      pageViewCounts.Contact_Us++;
    }


    if (/Donate/i.test(PageView)) {
      socialCounts.Twitter++;
    }

    for (const field in row) {
      if (field === 'User_ID') {
        continue;
      }

      if (!fieldSums.hasOwnProperty(field)) {
        fieldSums[field] = parseFloat(row[field]);
      } else {
        fieldSums[field] += parseFloat(row[field]);
      }
    }
  }

  let fieldAverages = {};
  for (const field in fieldSums) {
    fieldAverages[field] = fieldSums[field] / userCount;
  }

  return {
    userCount: userCount,
    fieldAverages: fieldAverages,
    socialCounts: socialCounts,
    ageGroups: ageGroups,
    activeMonthCounts: activeMonthCounts,
    pageViewCounts: pageViewCounts
  };
};



const csv = (req, res) => {
  fs.readFile(csvFilePath, 'utf8', (error, data) => {
    if (error) {
      console.error(error);
      return;
    }
    const parsedData = Papa.parse(data, { header: true });

    const jsonData = [];

    parsedData.data.forEach(row => {
      const jsonRow = {};
      Object.keys(row).forEach(key => {
        jsonRow[key.trim()] = row[key].trim();
      });

      jsonData.push(jsonRow);
    });

    const result = calculateAverages(jsonData);

    res.json({
      userCount: result.userCount,
      fieldAverages: result.fieldAverages,
      socialCounts: result.socialCounts,
      ageGroups: result.ageGroups,
      activeMonthCounts: result.activeMonthCounts,
      pageViewCounts: result.pageViewCounts,

    });
  }); 
};
module.exports = {
    csv
}


// user
//bounce rate
//avg time spent
//conversion rate