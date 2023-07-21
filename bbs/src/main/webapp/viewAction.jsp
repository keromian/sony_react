<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import = "bbs.BbsDAO" %> 
<%@ page import = "bbs.BbsDTO" %> 
<%
	request.setCharacterEncoding("UTF-8");
%>  
  
<jsp:useBean id="BbsDTO" class="bbs.BbsDTO" scope="page"/> 
<jsp:setProperty name='BbsDTO'  property="userId"/>
<jsp:setProperty name='BbsDTO'  property="subject"/>
<jsp:setProperty name='BbsDTO'  property="content"/>  
  
  
  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>



</head>
<body>
	
	<%
	// 로그인 정보 => 세션 가져오기
	String userId = null;
	if(session.getAttribute("userId")!=null){ // 세션값이 비어있지 않으면 세션아이디 변수에 저장
		userId = (String)session.getAttribute("userId");
	}

	    // bbsId 를 변수 bbsId=0 으로  초기화하고 받는다.
		int bbsId=0;
		if(request.getParameter("bbsId") !=null ){
			bbsId = Integer.parseInt(request.getParameter("bbsId"));			
		}
		
		// 만약 클릭한 글번호에 데이터가 없다면
		// 다시 게시판 목록으로 돌려보낸다.		
		if(bbsId==0){
	%>			
			<script>
				alert("데이터가 없습니다. 다시 확인하고 클릭하세요!");
				history.go(-1);
			</script>
	<%		
		}		
		
		
		// 해당 글번호 DAO에게 전달하기
		BbsDTO bbsDTO = new BbsDAO().getView(bbsId);
		
	%> 
	





