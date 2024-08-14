const express = require('express');
const multer = require('multer');
const csv = require('csv-parser');
const cors = require("cors")
const bodyparser = require('body-parser')
const fs = require('fs');
const mysql = require('mysql');
const path = require('path');
const app = express();
const { exec } = require('child_process');
app.use(cors())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'uploadcall')));
const upload = multer({ dest: 'uploads/' });
// const uploadcall= multer({dest:'uploadcall/'})
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Kgisl@123',
  database: 'crm'
});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploadcall/') // Uploads directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use original filename
  }
});
const uploadcall = multer({ storage: storage });
app.post('/upload', upload.single('file'), (req, res) => {
  const results = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      // Assuming your CSV columns are 'name', 'email', 'age'
      const query = 'INSERT INTO crm_user (name, employed_id, employed_phone_number,email_id,password,head_name,role_id) VALUES ?';
      const values = results.map((result) => [result.name, result.employed_id, result.employed_phone_number,result.email_id,result.password,result.head_name,result.role_id]);

      connection.query(query, [values], (err, results, fields) => {
        if (err) {
            console.log(err)
        }
        else{
            res.send({"status":"inserted"})
        }
       
      });
    });
});
app.get('/gethead',(req,res)=>{
  const getdata='select * from crm_user where role_id IN (1, 2, 3)'
  connection.query(getdata,(error,result)=>{
    if(error){
      console.log(error)
    }
    else{
      res.send(result)
    }
  })
})
app.get('/getrole',(req,res)=>{
  const getdata="SELECT * FROM crm_role WHERE role_name != 'admin'"
  // const getdata="SELECT * FROM crm_role"
  connection.query(getdata,(error,result)=>{
    if(error){
      console.log(error)
    }
    else{
      res.send(result)
    }
  })
})

app.get('/getallprofile/:lead_id',(req,res)=>{
  var {lead_id}=req.params
  console.log(lead_id)
  const getdata="SELECT * FROM crm.crm_profile JOIN  crm.crm_attribute ON crm.crm_profile.lead_id =  crm.crm_attribute.lead_id WHERE  crm.crm_attribute.employed_id = ( select employed_id from crm.crm_user where user_id=?);"
  connection.query(getdata,[lead_id],(error,result)=>{
    if(error){
      console.log(error)
    }
    else{
      res.send(result)
    }
  })
})
app.get('/getallglprofile/:lead_id',(req,res)=>{
  var {lead_id}=req.params
  console.log("id",lead_id)
  const getdata="SELECT * FROM crm.crm_glprofile  WHERE employed_id = ( select employed_id from crm.crm_user where user_id=?);"
  connection.query(getdata,[lead_id],(error,result)=>{
    if(error){
      console.log(error)
    }
    else{
      res.send(result)
    }
  })
})
app.post("/login",(req,res)=>{
  let{username,password}=req.body
  let loginsql='select * from crm_user where email_id=?'
  connection.query(loginsql,[username],(error,result)=>{
    if(error){
      res.send({"status":"empty_set"})
    }
    else if(result.length>0){
      let dbusername=result[0].email_id
      let dbpassword=result[0].password
      let id=result[0].user_id
      let role=result[0].role_id
      let domain=result[0].domain_id
      if(dbusername===username && dbpassword===password){
        res.send({"status":"success","id":id,"role":role,"domain":domain})
      }
      else{
        res.send({"status":"invalid_user"})
      }
    }
    else{
      res.send({"status":"both_are_invalid"})
    }
  })
})
app.post('/adduser',(req,res)=>{
  var{emp_name,phonenumber,password,head,employeeid,emailid,role,domainid}=req.body
  const adduserquerry= 'INSERT INTO crm_user (name, employed_id, employed_phone_number,email_id,password,head_name,role_id,domain_id) VALUES(?,?,?,?,?,?,?,?)'
  connection.query(adduserquerry,[emp_name,employeeid,phonenumber,emailid,password,head,role,domainid],(error,result)=>{
    if(error){
      console.log(error)
      res.send({"status":"error"})
    }
    else{
      res.send({"status":"inserted"})
    }
  })
})
app.post('/uploadprofile', upload.single('file'), (req, res) => {
  const results = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      // Assuming your CSV columns are 'name', 'email', 'age'
      const query = 'INSERT INTO crm_profile (name, phone_number,email_id,current_status) VALUES ?';
      const queryatt='INSERT INTO crm_attribute (employed_id) VALUES ?'
      const values = results.map((result) => [result.name, result.phone_number, result.email_id,result.current_status]);
      const value2 = results.map((result)=>[result.employed_id])

      connection.query(query, [values], (err, results, fields) => {
        if (err) {
            console.log(err)
        }
        else{
            res.send({"status":"inserted"})
        }
      });
      connection.query(queryatt,[value2],(err,results,fields)=>{
        if (err) {
          console.log(err)
      }
      else{
          res.send({"status":"inserted"})
      }
      })
    });
});
// app.post('/uploadprofilegl', upload.single('file'), (req, res) => {
//   const results = [];

//   fs.createReadStream(req.file.path)
//     .pipe(csv())
//     .on('data', (data) => results.push(data))
//     .on('end', () => {
//       // Assuming your CSV columns are 'name', 'email', 'age'
//       const query = 'INSERT INTO crm_glprofile (first_name,last_name,email,alternative_emailid,phone_number,alternative_number,company_name,associated_company,person_linkedin_profile,mobile_phone_number,country_region,city,industry,job_title,current_status) VALUES ? ';
//       const queryatt='INSERT INTO crm_attribute (employed_id) VALUES ?'
      
//       // const values = results.map((result) => console.log([result.first_name,result.last_name,result.email,result.alternative_emailid,result.phone_number,result.alternative_number,result.company_name,result.associated_company,result.person_linkedin_profile,result.mobile_phone_number,result.country_region,result.city,result.industry,result.job_title,result.current_status]));
//       const values = results.map((result) => [result.first_name,result.last_name,result.email,result.alternative_emailid,result.phone_number,result.alternative_number,result.company_name,result.associated_company,result.person_linkedin_profile,result.mobile_phone_number,result.country_region,result.city,result.industry,result.job_title,result.current_status]);
//       const value2 = results.map((result)=>[result.employed_id])

//       connection.query(query, [values], (err, results, fields) => {
//         if (err) {
//             console.log(err)
//         }
//         else{
//             res.send({"status":"inserted"})
//         }
//       });
//       connection.query(queryatt,[value2],(err,results,fields)=>{
//         if (err) {
//           console.log(err)
//       }
//       else{
//           res.send({"status":"inserted"})
//       }
//       })
//     });
// });
app.post('/uploadprofilegl', upload.single('file'), async (req, res) => {
  const results = [];

  // Read and parse the CSV file
  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data', (data) => {
      results.push(data);
    })
    .on('end', async () => {
      try {
        // Ensure the CSV file has data
        if (!results.length) {
          return res.status(400).send({ error: 'No data found in the CSV file.' });
        }

        // Prepare values for insertion
        const values = results.map((result) => 
          [
          result.first_name, result.last_name, result.email,result.alternative_emailid, result.phone_number,result.alternative_number,
          result.company_name,result.associated_company,result.person_linkedin_profile,
          result.mobile_phone_number, result.country_region, result.city, result.industry,
          result.job_title, result.current_status,result.employed_id
        ]
        // console.log(result.first_name)
      );

        // const value2 = results.map((result) => [result.employed_id]);

        // Perform first database insertion
        await new Promise((resolve, reject) => {
          const query = `INSERT INTO crm_glprofile (first_name,last_name,email,alternative_emailid,phone_number,alternative_number,company_name,associated_company,person_linkedin_profile,mobile_phone_number,country_region,city,industry,job_title,current_status,employed_id) VALUES ?`;
          connection.query(query, [values], (err, results) => {
            if (err) return reject(err);
            console.log('Inserted into crm_glprofile:', results.affectedRows);
            resolve();
          });
        });

        // Perform second database insertion
        // await new Promise((resolve, reject) => {
        //   const queryatt = 'INSERT INTO crm_attribute (employed_id) VALUES ?';

        //   connection.query(queryatt, [value2], (err, results) => {
        //     if (err) return reject(err);
        //     console.log('Inserted into crm_attribute:', results.affectedRows);
        //     resolve();
        //   });
        // });

        // Send a single response after both insertions
        res.send({ status: 'inserted' });

      } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).send({ error: 'Database insert error.' });
      }
    });
});
// app.post('/uploadcall', uploadcall.single('file'), (req, res) => {
//   const { employeeId, leadId,note,leadstatus } = req.body;
//   console.log(leadstatus)
//   const filePath = req.file.path; // Path to the uploaded file
//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       console.error('Error reading file:', err);
//       return res.status(500).json({ error: 'Internal server error' });
//     }
 
//   const sql = `INSERT INTO crm.crm_activity (call_recording_type,note_type,employed_id, lead_id, lead_status_id) VALUES (?, ?, ?,?,?)`;
//   connection.query(sql, [filePath,note,employeeId, leadId,leadstatus], (error, results, fields) => {
//     if (error) {
//       console.error('Error inserting data:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       console.log('Data inserted successfully');
//       res.status(200).json({ message: 'Data inserted successfully' });
//     }
//   });
// });
// });
app.post('/uploadcall',(req,res)=>{
  const { employeeId, leadId,note,leadstatus } = req.body;
  const sql = `INSERT INTO crm.crm_activity (note_type,employed_id, lead_id, lead_status_id) VALUES (?, ?,?,?)`;
  connection.query(sql, [note,employeeId, leadId,leadstatus], (error, results, fields) => {
        if (error) {
          console.log(error)
          res.send({"status":"Internal server error"})
          // console.error('Error inserting data:', error);
          // res.status(500).json({ error: 'Internal server error' });
        } else {
          var updatesql='update crm_profile set current_status=? where lead_id=?'
          connection.query(updatesql,[leadstatus,leadId])
          res.send({"status":"inserted"})
          // console.log('Data inserted successfully');
          // res.status(200).json({ message: 'Data inserted successfully' });
        }
      });
})
// app.post('/addglprofile',(req,res)=>{
//   const{id}=req.params()
//   sql=""
//   const{first_name,last_name,email,alternative_emailid,phone_number,alternative_number,company_name,country_region,city,industry,mobile_phone_number,job_title,person_linkedin_profile,associated_company}=req.body
//   const sql=`INSERT INTO crm_glprofile (first_name,last_name,email,alternative_emailid,phone_number,alternative_number,company_name,associated_company,person_linkedin_profile,mobile_phone_number,country_region,city,industry,job_title,current_status,employed_id)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
//   connection.query(sql,[first_name,last_name,email,alternative_emailid,phone_number,alternative_number,company_name,associated_company,person_linkedin_profile,mobile_phone_number,country_region,city,industry,job_title,14,])
// })
app.post('/addglprofile/:id', (req, res) => {
  const { id } = req.params; // Get the user_id from request parameters
  const {
    first_name,
    last_name,
    email,
    alternative_emailid,
    phone_number,
    alternative_number,
    company_name,
    country_region,
    city,
    industry,
    mobile_phone_number,
    job_title,
    person_linkedin_profile,
    associated_company
  } = req.body;

  // Query to get the employed_id from crm_user table
  const getUserSql = 'SELECT employed_id FROM crm_user WHERE user_id = ?';
  connection.query(getUserSql, [id], (err, results) => {
    if (err) {
      return res.status(500).send('Error retrieving employed_id');
    }

    if (results.length === 0) {
      return res.status(404).send('User not found');
    }

    const employed_id = results[0].employed_id;

    // Insert into crm_glprofile table using the retrieved employed_id
    const insertSql = `
      INSERT INTO crm_glprofile 
      (first_name, last_name, email, alternative_emailid, phone_number, alternative_number, 
       company_name, associated_company, person_linkedin_profile, mobile_phone_number, 
       country_region, city, industry, job_title, current_status, employed_id) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    connection.query(
      insertSql,
      [
        first_name,
        last_name,
        email,
        alternative_emailid,
        phone_number,
        alternative_number,
        company_name,
        associated_company,
        person_linkedin_profile,
        mobile_phone_number,
        country_region,
        city,
        industry,
        job_title,
        23, // assuming current_status is a constant value
        employed_id
      ],
      (err, result) => {
        if (err) {
          return res.status(500).send('Error inserting into crm_glprofile');
        }
        res.status(200).send({"status":"Profile added successfully"});
      }
    );
  });
});

app.post('/leadactivity',(req,res)=>{
  const { employeeId, leadId,note,leadstatus } = req.body;
  const sql = `INSERT INTO crm.lead_glactivity (note,employed_id, lead_id, lead_status_id) VALUES (?,?,?,?)`;
  connection.query(sql, [note,employeeId, leadId,leadstatus], (error, results, fields) => {
        if (error) {
          console.log(error)
          res.send({"status":"Internal server error"})
          // console.error('Error inserting data:', error);
          // res.status(500).json({ error: 'Internal server error' });
        } else {
          var updatesql='update crm_glprofile set current_status=? where id=?'
          connection.query(updatesql,[leadstatus,leadId])
          res.send({"status":"inserted"})
          // console.log('Data inserted successfully');
          // res.status(200).json({ message: 'Data inserted successfully' });
        }
      });
})
app.get('/getstatus/:domain',(req,res)=>{
  var {domain}=req.params
  const getdata="SELECT * FROM crm_lead_status where domain_id=?"
  connection.query(getdata,[domain],(error,result)=>{
    if(error){
      console.log(error)
    }
    else{
      res.send(result)
    }
  })
})
app.get('/getglactivity/:lead_id',(req,res)=>{
  var {lead_id}=req.params
  const getdata="SELECT * FROM lead_glactivity where lead_id=?"
  connection.query(getdata,[lead_id],(error,result)=>{
    if(error){
      console.log(error)
    }
    else{
      res.send(result)
    }
    // if (result.length > 0) {
    //   const filePath = result[0].call_recording_type;
    //   // const fileStream = fs.createReadStream(path.join(__dirname, 'uploadcall', filePath)); // Adjust the path accordingly
    //   // fileStream.pipe(res);
    //   // res.send(result)
    //   const absolutePath = path.resolve(__dirname, filePath);
    //   res.send(absolutePath);
    //   console.log(absolutePath)
    // } else {
    //   res.status(404).send('MP3 file not found');
    // }
  })
})
app.get('/getactivity/:lead_id',(req,res)=>{
  var {lead_id}=req.params
  const getdata="SELECT * FROM crm_activity where lead_id=?"
  connection.query(getdata,[lead_id],(error,result)=>{
    if(error){
      console.log(error)
    }
    else{
      res.send(result)
    }
    // if (result.length > 0) {
    //   const filePath = result[0].call_recording_type;
    //   // const fileStream = fs.createReadStream(path.join(__dirname, 'uploadcall', filePath)); // Adjust the path accordingly
    //   // fileStream.pipe(res);
    //   // res.send(result)
    //   const absolutePath = path.resolve(__dirname, filePath);
    //   res.send(absolutePath);
    //   console.log(absolutePath)
    // } else {
    //   res.status(404).send('MP3 file not found');
    // }
  })
})
app.get('/getprofile/:lead_id',(req,res)=>{
  var {lead_id}=req.params
  // console.log(lead_id)
  const getdata="SELECT * FROM crm_profile WHERE lead_id=?"
  connection.query(getdata,[lead_id],(error,result)=>{
    if(error){
      console.log(error)
    }
    else{
      res.send(result)
    }
  })
})
app.get('/getglprofile/:lead_id',(req,res)=>{
  var {lead_id}=req.params
  console.log("data",lead_id)
  const getdata="SELECT * FROM crm_glprofile WHERE id=?"
  connection.query(getdata,[lead_id],(error,result)=>{
    if(error){
      console.log(error)
    }
    else{
      res.send(result)
    }
  })
})
// app.post('/updateprofile/:lead_id',(req,res)=>{
//   var {lead_id}=req.params
//   var {altphonenumber,degree,yop,percentage,university,city,state,experience,specialization,interstedcountry1,interstedcountry2,interstedcountry3,expectedsalary}=req.body
//   var updatesql='update crm_profile set alt_phone_number=?,degree=?,year_of_passing=?,percentage=?,university=?,city=?,state=?,experience=?,specialization=?,interested_country1_id=?,interested_country2_id=?,interested_country3_id=?,expected_salary=? where lead_id=?'
//   connection.query(updatesql,[altphonenumber,degree,yop,percentage,university,city,state,experience,specialization,interstedcountry1,interstedcountry2,interstedcountry3,expectedsalary,lead_id],(error,result)=>{
//     if(error){
//         res.send({"status":"error"})
//         console.log(error)
//     }
//     else{
//         res.send({"status":"success"})
//     }
//   })

// })
app.post('/updateprofile/:lead_id',(req,res)=>{
  var {lead_id}=req.params
  var {name,emailid,phonenumber,altphonenumber,degree,yop,percentage,university,city,state,experience,specialization,interstedcountry1,interstedcountry2,interstedcountry3,expectedsalary}=req.body
  var updatesql='update crm_profile set name=?,phone_number=?,alt_phone_number=?,email_id=?,degree=?,year_of_passing=?,percentage=?,university=?,city=?,state=?,experience=?,specialization=?,interested_country1_id=?,interested_country2_id=?,interested_country3_id=?,expected_salary=? where lead_id=?'
  connection.query(updatesql,[name,phonenumber,altphonenumber,emailid,degree,yop,percentage,university,city,state,experience,specialization,interstedcountry1,interstedcountry2,interstedcountry3,expectedsalary,lead_id],(error,result)=>{
    if(error){
        res.send({"status":"error"})
        console.log(error)
    }
    else{
        res.send({"status":"success"})
    }
  })

})
app.post('/updateglprofile/:lead_id',(req,res)=>{
  var {lead_id}=req.params
  var {first_name,last_name,email,alternative_emailid,phone_number,alternative_number,company_name,country_region,city,industry,mobile_phone_number,job_title,person_linkedin_profile,associated_company}=req.body
  var updatesql='update crm_glprofile set first_name=?,last_name=?,email=?,alternative_emailid=?,phone_number=?,alternative_number=?,company_name=?,associated_company=?,person_linkedin_profile=?,mobile_phone_number=?,country_region=?,city=?,industry=?,job_title=? where id=?'
  connection.query(updatesql,[first_name,last_name,email,alternative_emailid,phone_number,alternative_number,company_name,associated_company,person_linkedin_profile,mobile_phone_number,country_region,city,industry,job_title,lead_id],(error,result)=>{
    if(error){
        res.send({"status":"error"})
        console.log(error)
    }
    else{
        res.send({"status":"success"})
    }
  })

})
app.get('/getcountry',(req,res)=>{
  const getdata="SELECT * FROM crm.crm_country;"
  connection.query(getdata,(error,result)=>{
    if(error){
      console.log(error)
    }
    else{
      res.send(result)
    }
  })
})
app.get('/getstatuscount',(req,res)=>{
  const getstatuscount="SELECT cs.status, COUNT(p.current_status) AS status_count FROM crm.crm_profile p JOIN crm.crm_lead_status cs ON p.current_status = cs.id GROUP BY p.current_status;"
  connection.query(getstatuscount,(error,result)=>{
    if(error){
      console.log(error)
    }
    else{
      res.send(result)
    }
  })
})
app.post('/run-script', (req, res) => {
                exec('./generate-docker-compose.sh -u 200', (error, stdout, stderr) => {
    // exec('docker exec server-code-server-1 sh -c "/home/coder/.hidden/setup/test.sh" ./output.json', (error, stdout, stderr) => {
      if (error) {
          console.error(`Error executing script: ${error}`);
          return res.status(500).json({ error: 'Error executing script' });
      }
      console.log(`stdout: ${stdout}`);
      // console.og
      console.error(`stderr: ${stderr}`);
      res.json({ stdout, stderr });
      
  });
});
app.get('/check-docker', (req, res) => {
  exec('docker --version', (error, stdout, stderr) => {
    if (error) {
      res.json({ installed: false, message: 'Docker is not installed' });
      return;
    }
    res.json({ installed: true, message: stdout });
  });
});
app.get('/getalluser',(req,res)=>{
  const getdata='select * from crm_user'
  connection.query(getdata,(error,result)=>{
    if(error){
      console.log(error)
    }
    else{
      res.send(result)
    }
  })
})
app.get('/getdomain',(req,res)=>{
  const getdata='select * from crm_domain'
  connection.query(getdata,(error,result)=>{
    if(error){
      console.log(error)
    }
    else{
      res.send(result)
    }
  })
})
app.get('/getteam/:id',(req,res)=>{
  var {id}=req.params
  console.log("check",id)
  const getteam='select * from crm_user where head_name=(select name from crm_user where user_id=?)'
  connection.query(getteam,[id],(error,result)=>{
    if(error){
      console.log(error)
    }
    else{
      res.send(result)
    }
  })
})
app.listen(5001, () => {
  console.log('Server is running on port 5001');
});
