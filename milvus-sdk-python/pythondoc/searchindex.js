Search.setIndex({docnames:["assets","conftest","exceptions","factorys","index","milvus","milvus.client","milvus.grpc_gen","modules","results","setup","status","types"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["assets.rst","conftest.rst","exceptions.rst","factorys.rst","index.rst","milvus.rst","milvus.client.rst","milvus.grpc_gen.rst","modules.rst","results.rst","setup.rst","status.rst","types.rst"],objects:{"":{conftest:[1,0,0,"-"],factorys:[3,0,0,"-"],milvus:[5,0,0,"-"]},"factorys.FakerProvider":{dim:[3,3,1,""],name:[3,3,1,""],table_name:[3,3,1,""]},"milvus.IndexType":{FLAT:[12,5,1,""],INVALID:[12,5,1,""],IVFLAT:[12,5,1,""],IVF_FLAT:[12,5,1,""],IVF_SQ8:[12,5,1,""],IVF_SQ8H:[12,5,1,""],IVF_SQ8_H:[12,5,1,""],MIX_NSG:[12,5,1,""]},"milvus.MetricType":{IP:[12,5,1,""],L2:[12,5,1,""]},"milvus.Prepare":{cmd:[5,3,1,""],delete_param:[5,3,1,""],index:[5,3,1,""],index_param:[5,3,1,""],insert_param:[5,3,1,""],range:[5,3,1,""],ranges:[5,3,1,""],search_param:[5,3,1,""],search_vector_in_files_param:[5,3,1,""],table_name:[5,3,1,""],table_schema:[5,3,1,""]},"milvus.Status":{BUILD_INDEX_ERROR:[11,5,1,""],CACHE_FAILED:[11,5,1,""],CANNOT_CREATE_FILE:[11,5,1,""],CANNOT_CREATE_FOLDER:[11,5,1,""],CANNOT_DELETE_FILE:[11,5,1,""],CANNOT_DELETE_FOLDER:[11,5,1,""],CONNECT_FAILED:[11,5,1,""],FILE_NOT_FOUND:[11,5,1,""],ILLEGAL_ARGUMENT:[11,5,1,""],ILLEGAL_DIMENSION:[11,5,1,""],ILLEGAL_INDEX_TYPE:[11,5,1,""],ILLEGAL_METRIC_TYPE:[11,5,1,""],ILLEGAL_NLIST:[11,5,1,""],ILLEGAL_RANGE:[11,5,1,""],ILLEGAL_ROWRECORD:[11,5,1,""],ILLEGAL_SEARCH_RESULT:[11,5,1,""],ILLEGAL_TABLE_NAME:[11,5,1,""],ILLEGAL_TOPK:[11,5,1,""],ILLEGAL_VECTOR_ID:[11,5,1,""],META_FAILED:[11,5,1,""],OK:[11,3,1,""],OUT_OF_MEMORY:[11,5,1,""],PERMISSION_DENIED:[11,5,1,""],SUCCESS:[11,5,1,""],TABLE_NOT_EXISTS:[11,5,1,""],UNEXPECTED_ERROR:[11,5,1,""]},"milvus.client":{"abstract":[6,0,0,"-"],exceptions:[6,0,0,"-"],grpc_client:[6,0,0,"-"],types:[6,0,0,"-"],utils:[6,0,0,"-"]},"milvus.client.abstract":{ConnectIntf:[6,2,1,""],IndexParam:[6,2,1,""],QueryResult:[9,2,1,""],Range:[6,2,1,""],RowQueryResult:[9,2,1,""],TableSchema:[6,2,1,""],TopKQueryResult:[9,2,1,""]},"milvus.client.abstract.ConnectIntf":{add_vectors:[6,3,1,""],client_version:[6,3,1,""],connect:[6,3,1,""],connected:[6,3,1,""],create_index:[6,3,1,""],create_table:[6,3,1,""],delete_table:[6,3,1,""],describe_index:[6,3,1,""],describe_table:[6,3,1,""],disconnect:[6,3,1,""],drop_index:[6,3,1,""],get_table_row_count:[6,3,1,""],has_table:[6,3,1,""],preload_table:[6,3,1,""],search_vectors:[6,3,1,""],search_vectors_in_files:[6,3,1,""],server_status:[6,3,1,""],server_version:[6,3,1,""],show_tables:[6,3,1,""]},"milvus.client.abstract.TopKQueryResult":{distance_array:[9,3,1,""],id_array:[9,3,1,""],raw:[9,3,1,""],shape:[9,3,1,""]},"milvus.client.exceptions":{ConnectError:[6,4,1,""],NotConnectError:[6,4,1,""],ParamError:[6,4,1,""],RepeatingConnectError:[6,4,1,""]},"milvus.client.grpc_client":{GrpcMilvus:[6,2,1,""]},"milvus.client.grpc_client.GrpcMilvus":{add_vectors:[6,3,1,""],client_version:[6,3,1,""],connect:[6,3,1,""],connected:[6,3,1,""],count_table:[6,3,1,""],create_index:[6,3,1,""],create_table:[6,3,1,""],delete_table:[6,3,1,""],describe_index:[6,3,1,""],describe_table:[6,3,1,""],disconnect:[6,3,1,""],drop_index:[6,3,1,""],drop_table:[6,3,1,""],get_table_row_count:[6,3,1,""],has_table:[6,3,1,""],insert:[6,3,1,""],preload_table:[6,3,1,""],search:[6,3,1,""],search_in_files:[6,3,1,""],search_vectors:[6,3,1,""],search_vectors_in_files:[6,3,1,""],server_address:[6,3,1,""],server_status:[6,3,1,""],server_version:[6,3,1,""],show_tables:[6,3,1,""]},"milvus.client.types":{IndexType:[6,2,1,""],MetricType:[6,2,1,""],Status:[6,2,1,""]},"milvus.client.types.IndexType":{FLAT:[6,5,1,""],INVALID:[6,5,1,""],IVFLAT:[6,5,1,""],IVF_FLAT:[6,5,1,""],IVF_SQ8:[6,5,1,""],IVF_SQ8H:[6,5,1,""],IVF_SQ8_H:[6,5,1,""],MIX_NSG:[6,5,1,""]},"milvus.client.types.MetricType":{IP:[6,5,1,""],L2:[6,5,1,""]},"milvus.client.types.Status":{BUILD_INDEX_ERROR:[6,5,1,""],CACHE_FAILED:[6,5,1,""],CANNOT_CREATE_FILE:[6,5,1,""],CANNOT_CREATE_FOLDER:[6,5,1,""],CANNOT_DELETE_FILE:[6,5,1,""],CANNOT_DELETE_FOLDER:[6,5,1,""],CONNECT_FAILED:[6,5,1,""],FILE_NOT_FOUND:[6,5,1,""],ILLEGAL_ARGUMENT:[6,5,1,""],ILLEGAL_DIMENSION:[6,5,1,""],ILLEGAL_INDEX_TYPE:[6,5,1,""],ILLEGAL_METRIC_TYPE:[6,5,1,""],ILLEGAL_NLIST:[6,5,1,""],ILLEGAL_RANGE:[6,5,1,""],ILLEGAL_ROWRECORD:[6,5,1,""],ILLEGAL_SEARCH_RESULT:[6,5,1,""],ILLEGAL_TABLE_NAME:[6,5,1,""],ILLEGAL_TOPK:[6,5,1,""],ILLEGAL_VECTOR_ID:[6,5,1,""],META_FAILED:[6,5,1,""],OK:[6,3,1,""],OUT_OF_MEMORY:[6,5,1,""],PERMISSION_DENIED:[6,5,1,""],SUCCESS:[6,5,1,""],TABLE_NOT_EXISTS:[6,5,1,""],UNEXPECTED_ERROR:[6,5,1,""]},"milvus.client.utils":{check_pass_param:[6,1,1,""],int_or_str:[6,1,1,""],is_correct_date_str:[6,1,1,""],is_legal_array:[6,1,1,""],is_legal_cmd:[6,1,1,""],is_legal_date_range:[6,1,1,""],is_legal_dimension:[6,1,1,""],is_legal_host:[6,1,1,""],is_legal_ids:[6,1,1,""],is_legal_index_size:[6,1,1,""],is_legal_index_type:[6,1,1,""],is_legal_metric_type:[6,1,1,""],is_legal_nlist:[6,1,1,""],is_legal_nprobe:[6,1,1,""],is_legal_port:[6,1,1,""],is_legal_table_name:[6,1,1,""],is_legal_topk:[6,1,1,""],parser_range_date:[6,1,1,""]},"milvus.grpc_gen":{milvus_pb2:[7,0,0,"-"],milvus_pb2_grpc:[7,0,0,"-"],status_pb2:[7,0,0,"-"],status_pb2_grpc:[7,0,0,"-"]},"milvus.grpc_gen.milvus_pb2_grpc":{MilvusServiceServicer:[7,2,1,""],MilvusServiceStub:[7,2,1,""],add_MilvusServiceServicer_to_server:[7,1,1,""]},"milvus.grpc_gen.milvus_pb2_grpc.MilvusServiceServicer":{Cmd:[7,3,1,""],CountTable:[7,3,1,""],CreateIndex:[7,3,1,""],CreateTable:[7,3,1,""],DeleteByRange:[7,3,1,""],DescribeIndex:[7,3,1,""],DescribeTable:[7,3,1,""],DropIndex:[7,3,1,""],DropTable:[7,3,1,""],HasTable:[7,3,1,""],Insert:[7,3,1,""],PreloadTable:[7,3,1,""],Search:[7,3,1,""],SearchInFiles:[7,3,1,""],ShowTables:[7,3,1,""]},"milvus.settings":{ColorFulFormatColMixin:[5,2,1,""],ColorfulFormatter:[5,2,1,""],DefaultConfig:[5,2,1,""]},"milvus.settings.ColorFulFormatColMixin":{format_col:[5,3,1,""]},"milvus.settings.ColorfulFormatter":{format:[5,3,1,""]},"milvus.settings.DefaultConfig":{GRPC_PORT:[5,5,1,""],GRPC_URI:[5,5,1,""]},conftest:{args:[1,1,1,""],connect:[1,1,1,""],gcon:[1,1,1,""],gip:[1,1,1,""],gtable:[1,1,1,""],gvector:[1,1,1,""],pytest_addoption:[1,1,1,""],table:[1,1,1,""]},factorys:{FakerProvider:[3,2,1,""],fake_query_bin_result:[3,1,1,""],gen_long_str:[3,1,1,""],gen_nq_binaries:[3,1,1,""],gen_one_binary:[3,1,1,""],gen_single_vector:[3,1,1,""],gen_unique_str:[3,1,1,""],gen_vector:[3,1,1,""],gen_vectors:[3,1,1,""],get_current_day:[3,1,1,""],get_last_day:[3,1,1,""],get_next_day:[3,1,1,""],query_ranges_factory:[3,1,1,""],range_factory:[3,1,1,""],ranges_factory:[3,1,1,""],records_factory:[3,1,1,""],table_schema_factory:[3,1,1,""],time_it:[3,1,1,""]},milvus:{ConnectError:[5,4,1,""],IndexType:[12,2,1,""],MetricType:[12,2,1,""],Milvus:[5,5,1,""],NotConnectError:[5,4,1,""],ParamError:[5,4,1,""],Prepare:[5,2,1,""],RepeatingConnectError:[5,4,1,""],Status:[11,2,1,""],client:[6,0,0,"-"],grpc_gen:[7,0,0,"-"],settings:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","exception","Python exception"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:exception","5":"py:attribute"},terms:{"0x7f29c38d2258":[],"0x7f310d7e0888":[],"0x7f38dc40f888":[],"0x7f400b0fb888":3,"0x7f626dc93888":[],"0x7fe6adfbb888":[],"3000m":6,"37s":9,"88s":9,"abstract":[5,8,9],"class":[0,2,3,5,6,7,9,11,12],"default":[2,5,6,11],"enum":[5,6,12],"float":6,"function":[],"int":[2,5,6,11],"return":[0,5,6,7,9],"try":[5,6],And:9,For:9,The:[5,6],__version__:0,_dis_list:[6,9],_distanc:[6,9],_id:[6,9],_id_list:[6,9],about:9,adapt:4,add:[6,7],add_milvusserviceservicer_to_serv:7,add_vector:6,address:6,advanc:6,after:6,alia:[0,5],all:[6,7],allow:[],ani:6,append:5,arg:[1,6],argument:[],arrai:[6,7,9],asynchron:6,attribut:[2,5,6,11],avoid:[],base:[0,2,3,5,6,7,9,11,12],baseprovid:3,been:6,befor:[5,6],being:6,bool:6,brief:7,build:[6,7],build_index_error:[2,5,6,11],built:7,cach:6,cache_fail:[2,5,6,11],call:[5,6],can:[0,4,9],cannot_create_fil:[2,5,6,11],cannot_create_fold:[2,5,6,11],cannot_delete_fil:[2,5,6,11],cannot_delete_fold:[2,5,6,11],carri:5,cell:6,channel:[6,7],check:6,check_pass_param:6,classmethod:[0,5],client:[4,5,8,9],client_vers:6,cmd:[0,5,6,7],code:[2,5,6,11],colorfulformatcolmixin:5,colorfulformatt:5,column:[6,9],comment:9,complet:4,comput:5,condit:[6,7],conftest:8,connect:[1,5,6],connect_fail:[2,5,6,11],connecterror:[5,6],connectintf:6,contain:4,content:[4,8],context:7,cost:9,count:6,count_tabl:6,counttabl:7,coupl:5,creat:[6,7],create_index:6,create_t:6,createindex:7,createt:7,crete:6,current:[2,5,6,11],dai:3,data:6,databas:[6,7],date:[0,5,6],datefmt:5,datetim:[0,5],deal:4,defaultconfig:5,delet:[6,7],delete_param:[0,5],delete_t:6,deletebyrang:7,describ:7,describe_index:6,describe_t:6,describeindex:7,describet:7,deseri:[],design:6,detail:6,determin:5,dict:[0,5,6],dictionari:5,dim:[3,6],dimens:[0,3,5,6],direct:4,dis:9,dis_list:9,disconnect:[5,6],distanc:[6,9],distance_arrai:[6,9],distroi:6,doubl:6,drop:[6,7],drop_index:6,drop_tabl:6,dropindex:7,droptabl:7,els:6,end:[0,5,6],end_dat:[0,5,6],enumer:[5,6,12],ergod:9,error:[5,6],event:5,everi:6,exampl:[4,5,6,9],except:[4,5,8],exist:[6,7],factori:8,fail:[5,6],fake_query_bin_result:3,faker:3,fakerprovid:3,faster:9,file:[4,6,7],file_id:6,file_id_arrai:7,file_not_found:[2,5,6,11],find:0,first:9,flat:[5,6,12],float32:6,fmt:5,follow:[],format:[5,6,9],format_col:5,formatexcept:5,formatt:5,formattim:5,from:[6,9],func:3,gcon:1,gen_long_str:3,gen_nq_binari:3,gen_one_binari:3,gen_single_vector:3,gen_unique_str:3,gen_vector:3,gener:3,get:[0,6,7,9],get_current_dai:3,get_last_dai:3,get_next_dai:3,get_table_row_count:6,getmessag:5,getter:[6,9],gip:1,give:7,given:6,going:[6,7],grpc:6,grpc_client:[0,5,8],grpc_gen:[5,8],grpc_port:5,grpc_uri:5,grpcmilvu:[0,5,6],gtabl:1,guidelin:4,gvector:1,has_tabl:6,hastabl:7,here:6,hohow:[],host:6,how:[4,6,7],id_arrai:[6,9],id_list:9,ids:[0,5,6,9],illeg:[5,6],illegal_argu:[2,5,6,11],illegal_dimens:[2,5,6,11],illegal_index_typ:[2,5,6,11],illegal_metric_typ:[2,5,6,11],illegal_nlist:[2,5,6,11],illegal_rang:[2,5,6,11],illegal_rowrecord:[2,5,6,11],illegal_search_result:[2,5,6,11],illegal_table_nam:[2,5,6,11],illegal_topk:[2,5,6,11],illegal_vector_id:[2,5,6,11],implement:6,index:[0,4,5,6,7],index_file_s:[0,5,6],index_param:[0,5],index_s:6,index_typ:[0,5,6],indexparam:6,indexschema:6,indextyp:[0,5,6,12],indic:6,inform:[5,6,7],insert:[6,7],insert_param:[0,5],insertparam:[],int64:6,int_or_str:6,intenum:[5,6,12],interfac:[5,6,7],intern:7,invalid:[5,6,12],invok:6,is_correct_date_str:6,is_legal_arrai:6,is_legal_cmd:6,is_legal_date_rang:6,is_legal_dimens:6,is_legal_host:6,is_legal_id:6,is_legal_index_s:6,is_legal_index_typ:6,is_legal_metric_typ:6,is_legal_nlist:6,is_legal_nprob:6,is_legal_port:6,is_legal_table_nam:6,is_legal_topk:6,item:[6,9],ivf_flat:[5,6,12],ivf_sq8:[5,6,12],ivf_sq8_h:[5,6,12],ivf_sq8h:[5,6,12],ivflat:[5,6,12],kwarg:[6,9],least:4,level_nam:5,like:[0,4,5],list:[0,5,6,7],load:6,log:5,logrecord:5,mani:[6,7],max:[],memori:6,messag:[2,5,6,11],message_str:5,meta_fail:[2,5,6,11],method:[6,7],metric:[],metric_typ:[0,5,6],metrictyp:[0,5,6,12],milvu:[0,2,8,9,11,12],milvus_ob2:[],milvus_pb2:[5,8],milvus_pb2_grpc:[5,8],milvusserviceservic:7,milvusservicestub:7,mix_nsg:[5,6,12],mode:7,modul:[4,8],mon:4,most:6,mt19937:3,name:[0,3,5,6,7],network:6,nlist:[0,5,6],none:[0,3,5,6],notconnecterror:[5,6],note:9,nov:4,now:6,nprobe:[0,5,6],num:[3,6],number:6,obj:[],object:[0,2,5,6,7,9,11],obtain:6,onli:[6,9],oper:[5,6],operand:5,option:[2,5,6,7,11],out:5,out_of_memori:[2,5,6,11],packag:8,page:4,param:[0,5,6,7],paramerror:[5,6],paramet:[0,5,6],parser:[0,1,5],parser_range_d:6,pass:[],permission_deni:[2,5,6,11],port:6,posit:9,preload:[6,7],preload_t:6,preloadt:7,prepar:[0,5,6],preparatori:5,print:9,probe:6,process:9,program:9,properti:[6,9],proto:6,provid:[3,6,7,9],pytest_addopt:1,queri:[6,7,9],query_rang:[0,5,6],query_range_arrai:7,query_ranges_factori:3,query_record:[0,5,6],query_record_arrai:7,query_result:6,queryresult:[6,9],quickstart:4,randomst:3,rang:[0,5,6,7],range_factori:3,ranges_factori:3,raw:[6,9],raw_sourc:[6,9],recommend:9,record:[5,6,9],record_arrai:7,records_factori:3,repeatedli:[5,6],repeatingconnecterror:[5,6],request:[1,6,7],requir:[0,5,6],res:6,respons:[6,9],result:[4,6,7],root:4,row:[6,9],rowqueryresult:[6,9],rowrecord:6,rpc:7,rtype:6,run:9,schema:7,script:0,sdk:6,search:[4,6,7],search_in_fil:6,search_param:[0,5],search_vector:6,search_vector_in_files_param:[0,5],search_vectors_in_fil:6,searchinfil:7,second:[6,9],seed:3,sentenc:9,separ:[6,9],serial:[],server:[5,6,7,9],server_address:6,server_statu:6,server_vers:6,servic:7,set:8,setup:8,shape:[6,9],should:[4,6],show:6,show_tabl:6,shown:[6,9],showtabl:7,similar:[6,7],situat:9,size:[],sourc:[0,1,2,3,5,6,7,9,11,12],specif:6,specifi:[5,6,7],sphinx:4,start:[0,5,6],start_dat:[0,5,6],statu:[2,4,5,6,7],status_pb2:[5,8],status_pb2_grpc:[5,8],step:5,store:[6,9],str:[0,2,3,5,6,11],string:5,style:5,submodul:8,subpackag:8,success:[2,5,6,11],successfulli:6,support:6,sync:7,synchron:6,tabl:[1,6,7],table_nam:[0,3,5,6,7],table_not_exist:[2,5,6,11],table_schema:[0,5,6],table_schema_factori:3,tableschema:[0,5,6],target:[6,7],tcp:[5,6],test:[6,7,9],text:5,thi:[4,6,7,9],time:[5,6,9],time_it:3,timeout:6,toctre:4,top_k:6,topk:[0,3,5,6,7,9],topkqueryresult:[6,9],ttype:[0,5],tutori:[],two:9,type:[0,4,5,8],unexpected_error:[2,5,6,11],unit:6,unpack:[6,9],uri:6,use:7,used:[5,6,7],uses:5,usestim:5,using:[5,6],util:[5,8],valueerror:[5,6],vector:[0,5,6,7],version:[4,6],vertor:6,visit:9,wai:9,wait:6,want:9,when:[6,9],which:[5,6,9],whole:[6,7,9],work:6,yield:5,you:[0,4,9],your:[4,9],yyyi:[0,5],zip:9},titles:["pymilvus","conftest module","pymilvus Exceptions","factorys module","Welcome to pymilvus's documentation!","milvus package","milvus.client package","milvus.grpc_gen package","pymilvus","pymilvus Search Results","setup module","pymilvus Status","pymilvus types"],titleterms:{"abstract":6,client:[0,6],conftest:1,content:[0,2,5,6,7,9,11,12],deal:9,document:4,exampl:0,except:[2,6],factori:3,grpc_client:6,grpc_gen:7,guidelin:9,hohow:[],how:9,indic:4,milvu:[5,6,7],milvus_pb2:7,milvus_pb2_grpc:7,modul:[0,1,2,3,5,6,7,9,10,11,12],packag:[5,6,7],pymilvu:[0,2,4,8,9,11,12],result:9,search:9,set:5,setup:10,statu:11,status_pb2:7,status_pb2_grpc:7,submodul:[5,6,7],subpackag:5,tabl:4,tutori:[],type:[6,12],util:6,version:0,welcom:4}})