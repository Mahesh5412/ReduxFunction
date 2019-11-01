<?php

	session_start();
	
	$json = file_get_contents('php://input');
    $obj = json_decode($json,true);
    
     //$corp_code 		= $obj['crop'];
    $corp_code 		= 'qptmstesting';
     
     $_SESSION["corp_code"] = $corp_code;



include "connect.php";

			/*$user=$obj['username'];
			$pwd =$obj['password'];
			$utype = $obj['utype'];*/

			$user='admin';
			$pwd ='admin123';
			$utype = 'admin';


           if($utype == 'admin'){
			   
			   echo "hiii";
			
			$sql = "select * from emsUsers where userName = '$user' && password = '$pwd' && role = '$utype'";
			$res_sel = mysqli_query($con,$sql);
			
			if(mysqli_num_rows($res_sel) > 0)
				{
		       		$row = mysqli_fetch_array($res_sel);
	    	
		    		$result['empId']=$row["empId"];
		    		$result['userName']=$row["userName"];
		    		$result['fullName']=$row["fullName"];
		    		
		    		
		    		if($res_sel){
						
					$result['status']='TRUE';
		    		$result['message']='Success';
		    		
						}	
				}
		    else
				{
					$result['status']='False';
					$result['message']='Username password doesnot exists!';
					
			    }
			}//if
			
		else if($utype == 'user'){
				
			$sql2 = "select * from emsUsers where userName = '$userName'  && password = '$password' && role<> 'admin'";
			$res_sel2 = mysqli_query($con,$sql2);
			
			if(mysqli_num_rows($res_sel2) > 0)
				{
					$row = mysqli_fetch_array($res_sel2);
					
		    		$result['empId']=$row["empId"];
		    		$result['userName']=$row["userName"];
		    		$result['fullName']=$row["fullName"];
		    		
		    		if($res_sel2){
						
					$result['status']='TRUE';
		    		$result['message']='Success';
						
						}
			
		}
				else
				{
					$result['status']='False';
					$result['message']='Username password doesnot exists!';
					
			    }
			}	
echo json_encode($result); 
?>
