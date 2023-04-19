export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	date: any;
	uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
	_eq?: InputMaybe<Scalars['Boolean']>;
	_gt?: InputMaybe<Scalars['Boolean']>;
	_gte?: InputMaybe<Scalars['Boolean']>;
	_in?: InputMaybe<Array<Scalars['Boolean']>>;
	_is_null?: InputMaybe<Scalars['Boolean']>;
	_lt?: InputMaybe<Scalars['Boolean']>;
	_lte?: InputMaybe<Scalars['Boolean']>;
	_neq?: InputMaybe<Scalars['Boolean']>;
	_nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "Elo" */
export type Elo = {
	__typename?: 'Elo';
	game_id: Scalars['uuid'];
	id: Scalars['uuid'];
	ranking_elo: Scalars['Int'];
	user_id: Scalars['uuid'];
};

/** aggregated selection of "Elo" */
export type Elo_Aggregate = {
	__typename?: 'Elo_aggregate';
	aggregate?: Maybe<Elo_Aggregate_Fields>;
	nodes: Array<Elo>;
};

/** aggregate fields of "Elo" */
export type Elo_Aggregate_Fields = {
	__typename?: 'Elo_aggregate_fields';
	avg?: Maybe<Elo_Avg_Fields>;
	count: Scalars['Int'];
	max?: Maybe<Elo_Max_Fields>;
	min?: Maybe<Elo_Min_Fields>;
	stddev?: Maybe<Elo_Stddev_Fields>;
	stddev_pop?: Maybe<Elo_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Elo_Stddev_Samp_Fields>;
	sum?: Maybe<Elo_Sum_Fields>;
	var_pop?: Maybe<Elo_Var_Pop_Fields>;
	var_samp?: Maybe<Elo_Var_Samp_Fields>;
	variance?: Maybe<Elo_Variance_Fields>;
};

/** aggregate fields of "Elo" */
export type Elo_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Elo_Select_Column>>;
	distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Elo_Avg_Fields = {
	__typename?: 'Elo_avg_fields';
	ranking_elo?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Elo". All fields are combined with a logical 'AND'. */
export type Elo_Bool_Exp = {
	_and?: InputMaybe<Array<Elo_Bool_Exp>>;
	_not?: InputMaybe<Elo_Bool_Exp>;
	_or?: InputMaybe<Array<Elo_Bool_Exp>>;
	game_id?: InputMaybe<Uuid_Comparison_Exp>;
	id?: InputMaybe<Uuid_Comparison_Exp>;
	ranking_elo?: InputMaybe<Int_Comparison_Exp>;
	user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "Elo" */
export enum Elo_Constraint {
	/** unique or primary key constraint on columns "id" */
	EloPkey = 'Elo_pkey',
}

/** input type for incrementing numeric columns in table "Elo" */
export type Elo_Inc_Input = {
	ranking_elo?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Elo" */
export type Elo_Insert_Input = {
	game_id?: InputMaybe<Scalars['uuid']>;
	id?: InputMaybe<Scalars['uuid']>;
	ranking_elo?: InputMaybe<Scalars['Int']>;
	user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Elo_Max_Fields = {
	__typename?: 'Elo_max_fields';
	game_id?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	ranking_elo?: Maybe<Scalars['Int']>;
	user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Elo_Min_Fields = {
	__typename?: 'Elo_min_fields';
	game_id?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	ranking_elo?: Maybe<Scalars['Int']>;
	user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "Elo" */
export type Elo_Mutation_Response = {
	__typename?: 'Elo_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Elo>;
};

/** on_conflict condition type for table "Elo" */
export type Elo_On_Conflict = {
	constraint: Elo_Constraint;
	update_columns?: Array<Elo_Update_Column>;
	where?: InputMaybe<Elo_Bool_Exp>;
};

/** Ordering options when selecting data from "Elo". */
export type Elo_Order_By = {
	game_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	ranking_elo?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Elo */
export type Elo_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "Elo" */
export enum Elo_Select_Column {
	/** column name */
	GameId = 'game_id',
	/** column name */
	Id = 'id',
	/** column name */
	RankingElo = 'ranking_elo',
	/** column name */
	UserId = 'user_id',
}

/** input type for updating data in table "Elo" */
export type Elo_Set_Input = {
	game_id?: InputMaybe<Scalars['uuid']>;
	id?: InputMaybe<Scalars['uuid']>;
	ranking_elo?: InputMaybe<Scalars['Int']>;
	user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Elo_Stddev_Fields = {
	__typename?: 'Elo_stddev_fields';
	ranking_elo?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Elo_Stddev_Pop_Fields = {
	__typename?: 'Elo_stddev_pop_fields';
	ranking_elo?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Elo_Stddev_Samp_Fields = {
	__typename?: 'Elo_stddev_samp_fields';
	ranking_elo?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "Elo" */
export type Elo_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Elo_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Elo_Stream_Cursor_Value_Input = {
	game_id?: InputMaybe<Scalars['uuid']>;
	id?: InputMaybe<Scalars['uuid']>;
	ranking_elo?: InputMaybe<Scalars['Int']>;
	user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Elo_Sum_Fields = {
	__typename?: 'Elo_sum_fields';
	ranking_elo?: Maybe<Scalars['Int']>;
};

/** update columns of table "Elo" */
export enum Elo_Update_Column {
	/** column name */
	GameId = 'game_id',
	/** column name */
	Id = 'id',
	/** column name */
	RankingElo = 'ranking_elo',
	/** column name */
	UserId = 'user_id',
}

export type Elo_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Elo_Inc_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Elo_Set_Input>;
	/** filter the rows which have to be updated */
	where: Elo_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Elo_Var_Pop_Fields = {
	__typename?: 'Elo_var_pop_fields';
	ranking_elo?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Elo_Var_Samp_Fields = {
	__typename?: 'Elo_var_samp_fields';
	ranking_elo?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Elo_Variance_Fields = {
	__typename?: 'Elo_variance_fields';
	ranking_elo?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "Game" */
export type Game = {
	__typename?: 'Game';
	id: Scalars['uuid'];
	name: Scalars['String'];
};

/** aggregated selection of "Game" */
export type Game_Aggregate = {
	__typename?: 'Game_aggregate';
	aggregate?: Maybe<Game_Aggregate_Fields>;
	nodes: Array<Game>;
};

/** aggregate fields of "Game" */
export type Game_Aggregate_Fields = {
	__typename?: 'Game_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<Game_Max_Fields>;
	min?: Maybe<Game_Min_Fields>;
};

/** aggregate fields of "Game" */
export type Game_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Game_Select_Column>>;
	distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Game". All fields are combined with a logical 'AND'. */
export type Game_Bool_Exp = {
	_and?: InputMaybe<Array<Game_Bool_Exp>>;
	_not?: InputMaybe<Game_Bool_Exp>;
	_or?: InputMaybe<Array<Game_Bool_Exp>>;
	id?: InputMaybe<Uuid_Comparison_Exp>;
	name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Game" */
export enum Game_Constraint {
	/** unique or primary key constraint on columns "id" */
	GamePkey = 'game_pkey',
}

/** input type for inserting data into table "Game" */
export type Game_Insert_Input = {
	id?: InputMaybe<Scalars['uuid']>;
	name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Game_Max_Fields = {
	__typename?: 'Game_max_fields';
	id?: Maybe<Scalars['uuid']>;
	name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Game_Min_Fields = {
	__typename?: 'Game_min_fields';
	id?: Maybe<Scalars['uuid']>;
	name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Game" */
export type Game_Mutation_Response = {
	__typename?: 'Game_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Game>;
};

/** on_conflict condition type for table "Game" */
export type Game_On_Conflict = {
	constraint: Game_Constraint;
	update_columns?: Array<Game_Update_Column>;
	where?: InputMaybe<Game_Bool_Exp>;
};

/** Ordering options when selecting data from "Game". */
export type Game_Order_By = {
	id?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Game */
export type Game_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "Game" */
export enum Game_Select_Column {
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
}

/** input type for updating data in table "Game" */
export type Game_Set_Input = {
	id?: InputMaybe<Scalars['uuid']>;
	name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "Game" */
export type Game_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Game_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Game_Stream_Cursor_Value_Input = {
	id?: InputMaybe<Scalars['uuid']>;
	name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "Game" */
export enum Game_Update_Column {
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
}

export type Game_Updates = {
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Game_Set_Input>;
	/** filter the rows which have to be updated */
	where: Game_Bool_Exp;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
	_eq?: InputMaybe<Scalars['Int']>;
	_gt?: InputMaybe<Scalars['Int']>;
	_gte?: InputMaybe<Scalars['Int']>;
	_in?: InputMaybe<Array<Scalars['Int']>>;
	_is_null?: InputMaybe<Scalars['Boolean']>;
	_lt?: InputMaybe<Scalars['Int']>;
	_lte?: InputMaybe<Scalars['Int']>;
	_neq?: InputMaybe<Scalars['Int']>;
	_nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "Match" */
export type Match = {
	__typename?: 'Match';
	finished_at?: Maybe<Scalars['date']>;
	game_id: Scalars['uuid'];
	id: Scalars['uuid'];
	last_player?: Maybe<Scalars['String']>;
	moves?: Maybe<Scalars['String']>;
	name: Scalars['String'];
	started_at: Scalars['date'];
};

/** aggregated selection of "Match" */
export type Match_Aggregate = {
	__typename?: 'Match_aggregate';
	aggregate?: Maybe<Match_Aggregate_Fields>;
	nodes: Array<Match>;
};

/** aggregate fields of "Match" */
export type Match_Aggregate_Fields = {
	__typename?: 'Match_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<Match_Max_Fields>;
	min?: Maybe<Match_Min_Fields>;
};

/** aggregate fields of "Match" */
export type Match_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Match_Select_Column>>;
	distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Match". All fields are combined with a logical 'AND'. */
export type Match_Bool_Exp = {
	_and?: InputMaybe<Array<Match_Bool_Exp>>;
	_not?: InputMaybe<Match_Bool_Exp>;
	_or?: InputMaybe<Array<Match_Bool_Exp>>;
	finished_at?: InputMaybe<Date_Comparison_Exp>;
	game_id?: InputMaybe<Uuid_Comparison_Exp>;
	id?: InputMaybe<Uuid_Comparison_Exp>;
	last_player?: InputMaybe<String_Comparison_Exp>;
	moves?: InputMaybe<String_Comparison_Exp>;
	name?: InputMaybe<String_Comparison_Exp>;
	started_at?: InputMaybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "Match" */
export enum Match_Constraint {
	/** unique or primary key constraint on columns "id" */
	MatchPkey = 'Match_pkey',
}

/** input type for inserting data into table "Match" */
export type Match_Insert_Input = {
	finished_at?: InputMaybe<Scalars['date']>;
	game_id?: InputMaybe<Scalars['uuid']>;
	id?: InputMaybe<Scalars['uuid']>;
	last_player?: InputMaybe<Scalars['String']>;
	moves?: InputMaybe<Scalars['String']>;
	name?: InputMaybe<Scalars['String']>;
	started_at?: InputMaybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Match_Max_Fields = {
	__typename?: 'Match_max_fields';
	finished_at?: Maybe<Scalars['date']>;
	game_id?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	last_player?: Maybe<Scalars['String']>;
	moves?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	started_at?: Maybe<Scalars['date']>;
};

/** aggregate min on columns */
export type Match_Min_Fields = {
	__typename?: 'Match_min_fields';
	finished_at?: Maybe<Scalars['date']>;
	game_id?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	last_player?: Maybe<Scalars['String']>;
	moves?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	started_at?: Maybe<Scalars['date']>;
};

/** response of any mutation on the table "Match" */
export type Match_Mutation_Response = {
	__typename?: 'Match_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Match>;
};

/** on_conflict condition type for table "Match" */
export type Match_On_Conflict = {
	constraint: Match_Constraint;
	update_columns?: Array<Match_Update_Column>;
	where?: InputMaybe<Match_Bool_Exp>;
};

/** Ordering options when selecting data from "Match". */
export type Match_Order_By = {
	finished_at?: InputMaybe<Order_By>;
	game_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	last_player?: InputMaybe<Order_By>;
	moves?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
	started_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Match */
export type Match_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "Match" */
export enum Match_Select_Column {
	/** column name */
	FinishedAt = 'finished_at',
	/** column name */
	GameId = 'game_id',
	/** column name */
	Id = 'id',
	/** column name */
	LastPlayer = 'last_player',
	/** column name */
	Moves = 'moves',
	/** column name */
	Name = 'name',
	/** column name */
	StartedAt = 'started_at',
}

/** input type for updating data in table "Match" */
export type Match_Set_Input = {
	finished_at?: InputMaybe<Scalars['date']>;
	game_id?: InputMaybe<Scalars['uuid']>;
	id?: InputMaybe<Scalars['uuid']>;
	last_player?: InputMaybe<Scalars['String']>;
	moves?: InputMaybe<Scalars['String']>;
	name?: InputMaybe<Scalars['String']>;
	started_at?: InputMaybe<Scalars['date']>;
};

/** Streaming cursor of the table "Match" */
export type Match_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: Match_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Match_Stream_Cursor_Value_Input = {
	finished_at?: InputMaybe<Scalars['date']>;
	game_id?: InputMaybe<Scalars['uuid']>;
	id?: InputMaybe<Scalars['uuid']>;
	last_player?: InputMaybe<Scalars['String']>;
	moves?: InputMaybe<Scalars['String']>;
	name?: InputMaybe<Scalars['String']>;
	started_at?: InputMaybe<Scalars['date']>;
};

/** update columns of table "Match" */
export enum Match_Update_Column {
	/** column name */
	FinishedAt = 'finished_at',
	/** column name */
	GameId = 'game_id',
	/** column name */
	Id = 'id',
	/** column name */
	LastPlayer = 'last_player',
	/** column name */
	Moves = 'moves',
	/** column name */
	Name = 'name',
	/** column name */
	StartedAt = 'started_at',
}

export type Match_Updates = {
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Match_Set_Input>;
	/** filter the rows which have to be updated */
	where: Match_Bool_Exp;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
	_eq?: InputMaybe<Scalars['String']>;
	_gt?: InputMaybe<Scalars['String']>;
	_gte?: InputMaybe<Scalars['String']>;
	/** does the column match the given case-insensitive pattern */
	_ilike?: InputMaybe<Scalars['String']>;
	_in?: InputMaybe<Array<Scalars['String']>>;
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: InputMaybe<Scalars['String']>;
	_is_null?: InputMaybe<Scalars['Boolean']>;
	/** does the column match the given pattern */
	_like?: InputMaybe<Scalars['String']>;
	_lt?: InputMaybe<Scalars['String']>;
	_lte?: InputMaybe<Scalars['String']>;
	_neq?: InputMaybe<Scalars['String']>;
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: InputMaybe<Scalars['String']>;
	_nin?: InputMaybe<Array<Scalars['String']>>;
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: InputMaybe<Scalars['String']>;
	/** does the column NOT match the given pattern */
	_nlike?: InputMaybe<Scalars['String']>;
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: InputMaybe<Scalars['String']>;
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: InputMaybe<Scalars['String']>;
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: InputMaybe<Scalars['String']>;
	/** does the column match the given SQL regular expression */
	_similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "User" */
export type User = {
	__typename?: 'User';
	created_at: Scalars['date'];
	email: Scalars['String'];
	full_name?: Maybe<Scalars['String']>;
	id: Scalars['uuid'];
	passwordHash: Scalars['String'];
	pseudo?: Maybe<Scalars['String']>;
	userAuthToken: Scalars['String'];
};

/** columns and relationships of "UserMatch" */
export type UserMatch = {
	__typename?: 'UserMatch';
	creator: Scalars['Boolean'];
	id: Scalars['uuid'];
	join: Scalars['date'];
	match_id: Scalars['uuid'];
	score?: Maybe<Scalars['Int']>;
	user_id: Scalars['uuid'];
};

/** aggregated selection of "UserMatch" */
export type UserMatch_Aggregate = {
	__typename?: 'UserMatch_aggregate';
	aggregate?: Maybe<UserMatch_Aggregate_Fields>;
	nodes: Array<UserMatch>;
};

/** aggregate fields of "UserMatch" */
export type UserMatch_Aggregate_Fields = {
	__typename?: 'UserMatch_aggregate_fields';
	avg?: Maybe<UserMatch_Avg_Fields>;
	count: Scalars['Int'];
	max?: Maybe<UserMatch_Max_Fields>;
	min?: Maybe<UserMatch_Min_Fields>;
	stddev?: Maybe<UserMatch_Stddev_Fields>;
	stddev_pop?: Maybe<UserMatch_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<UserMatch_Stddev_Samp_Fields>;
	sum?: Maybe<UserMatch_Sum_Fields>;
	var_pop?: Maybe<UserMatch_Var_Pop_Fields>;
	var_samp?: Maybe<UserMatch_Var_Samp_Fields>;
	variance?: Maybe<UserMatch_Variance_Fields>;
};

/** aggregate fields of "UserMatch" */
export type UserMatch_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<UserMatch_Select_Column>>;
	distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type UserMatch_Avg_Fields = {
	__typename?: 'UserMatch_avg_fields';
	score?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "UserMatch". All fields are combined with a logical 'AND'. */
export type UserMatch_Bool_Exp = {
	_and?: InputMaybe<Array<UserMatch_Bool_Exp>>;
	_not?: InputMaybe<UserMatch_Bool_Exp>;
	_or?: InputMaybe<Array<UserMatch_Bool_Exp>>;
	creator?: InputMaybe<Boolean_Comparison_Exp>;
	id?: InputMaybe<Uuid_Comparison_Exp>;
	join?: InputMaybe<Date_Comparison_Exp>;
	match_id?: InputMaybe<Uuid_Comparison_Exp>;
	score?: InputMaybe<Int_Comparison_Exp>;
	user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "UserMatch" */
export enum UserMatch_Constraint {
	/** unique or primary key constraint on columns "id" */
	UserMatchPkey = 'UserMatch_pkey',
}

/** input type for incrementing numeric columns in table "UserMatch" */
export type UserMatch_Inc_Input = {
	score?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "UserMatch" */
export type UserMatch_Insert_Input = {
	creator?: InputMaybe<Scalars['Boolean']>;
	id?: InputMaybe<Scalars['uuid']>;
	join?: InputMaybe<Scalars['date']>;
	match_id?: InputMaybe<Scalars['uuid']>;
	score?: InputMaybe<Scalars['Int']>;
	user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type UserMatch_Max_Fields = {
	__typename?: 'UserMatch_max_fields';
	id?: Maybe<Scalars['uuid']>;
	join?: Maybe<Scalars['date']>;
	match_id?: Maybe<Scalars['uuid']>;
	score?: Maybe<Scalars['Int']>;
	user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type UserMatch_Min_Fields = {
	__typename?: 'UserMatch_min_fields';
	id?: Maybe<Scalars['uuid']>;
	join?: Maybe<Scalars['date']>;
	match_id?: Maybe<Scalars['uuid']>;
	score?: Maybe<Scalars['Int']>;
	user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "UserMatch" */
export type UserMatch_Mutation_Response = {
	__typename?: 'UserMatch_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<UserMatch>;
};

/** on_conflict condition type for table "UserMatch" */
export type UserMatch_On_Conflict = {
	constraint: UserMatch_Constraint;
	update_columns?: Array<UserMatch_Update_Column>;
	where?: InputMaybe<UserMatch_Bool_Exp>;
};

/** Ordering options when selecting data from "UserMatch". */
export type UserMatch_Order_By = {
	creator?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	join?: InputMaybe<Order_By>;
	match_id?: InputMaybe<Order_By>;
	score?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: UserMatch */
export type UserMatch_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "UserMatch" */
export enum UserMatch_Select_Column {
	/** column name */
	Creator = 'creator',
	/** column name */
	Id = 'id',
	/** column name */
	Join = 'join',
	/** column name */
	MatchId = 'match_id',
	/** column name */
	Score = 'score',
	/** column name */
	UserId = 'user_id',
}

/** input type for updating data in table "UserMatch" */
export type UserMatch_Set_Input = {
	creator?: InputMaybe<Scalars['Boolean']>;
	id?: InputMaybe<Scalars['uuid']>;
	join?: InputMaybe<Scalars['date']>;
	match_id?: InputMaybe<Scalars['uuid']>;
	score?: InputMaybe<Scalars['Int']>;
	user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type UserMatch_Stddev_Fields = {
	__typename?: 'UserMatch_stddev_fields';
	score?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type UserMatch_Stddev_Pop_Fields = {
	__typename?: 'UserMatch_stddev_pop_fields';
	score?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type UserMatch_Stddev_Samp_Fields = {
	__typename?: 'UserMatch_stddev_samp_fields';
	score?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "UserMatch" */
export type UserMatch_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: UserMatch_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type UserMatch_Stream_Cursor_Value_Input = {
	creator?: InputMaybe<Scalars['Boolean']>;
	id?: InputMaybe<Scalars['uuid']>;
	join?: InputMaybe<Scalars['date']>;
	match_id?: InputMaybe<Scalars['uuid']>;
	score?: InputMaybe<Scalars['Int']>;
	user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type UserMatch_Sum_Fields = {
	__typename?: 'UserMatch_sum_fields';
	score?: Maybe<Scalars['Int']>;
};

/** update columns of table "UserMatch" */
export enum UserMatch_Update_Column {
	/** column name */
	Creator = 'creator',
	/** column name */
	Id = 'id',
	/** column name */
	Join = 'join',
	/** column name */
	MatchId = 'match_id',
	/** column name */
	Score = 'score',
	/** column name */
	UserId = 'user_id',
}

export type UserMatch_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<UserMatch_Inc_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<UserMatch_Set_Input>;
	/** filter the rows which have to be updated */
	where: UserMatch_Bool_Exp;
};

/** aggregate var_pop on columns */
export type UserMatch_Var_Pop_Fields = {
	__typename?: 'UserMatch_var_pop_fields';
	score?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type UserMatch_Var_Samp_Fields = {
	__typename?: 'UserMatch_var_samp_fields';
	score?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type UserMatch_Variance_Fields = {
	__typename?: 'UserMatch_variance_fields';
	score?: Maybe<Scalars['Float']>;
};

/** aggregated selection of "User" */
export type User_Aggregate = {
	__typename?: 'User_aggregate';
	aggregate?: Maybe<User_Aggregate_Fields>;
	nodes: Array<User>;
};

/** aggregate fields of "User" */
export type User_Aggregate_Fields = {
	__typename?: 'User_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<User_Max_Fields>;
	min?: Maybe<User_Min_Fields>;
};

/** aggregate fields of "User" */
export type User_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<User_Select_Column>>;
	distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
	_and?: InputMaybe<Array<User_Bool_Exp>>;
	_not?: InputMaybe<User_Bool_Exp>;
	_or?: InputMaybe<Array<User_Bool_Exp>>;
	created_at?: InputMaybe<Date_Comparison_Exp>;
	email?: InputMaybe<String_Comparison_Exp>;
	full_name?: InputMaybe<String_Comparison_Exp>;
	id?: InputMaybe<Uuid_Comparison_Exp>;
	passwordHash?: InputMaybe<String_Comparison_Exp>;
	pseudo?: InputMaybe<String_Comparison_Exp>;
	userAuthToken?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "User" */
export enum User_Constraint {
	/** unique or primary key constraint on columns "email" */
	UserEmailKey = 'User_email_key',
	/** unique or primary key constraint on columns "id" */
	UserPkey = 'User_pkey',
	/** unique or primary key constraint on columns "userAuthToken" */
	UserUserAuthTokenKey = 'User_userAuthToken_key',
}

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
	created_at?: InputMaybe<Scalars['date']>;
	email?: InputMaybe<Scalars['String']>;
	full_name?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['uuid']>;
	passwordHash?: InputMaybe<Scalars['String']>;
	pseudo?: InputMaybe<Scalars['String']>;
	userAuthToken?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
	__typename?: 'User_max_fields';
	created_at?: Maybe<Scalars['date']>;
	email?: Maybe<Scalars['String']>;
	full_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	passwordHash?: Maybe<Scalars['String']>;
	pseudo?: Maybe<Scalars['String']>;
	userAuthToken?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
	__typename?: 'User_min_fields';
	created_at?: Maybe<Scalars['date']>;
	email?: Maybe<Scalars['String']>;
	full_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	passwordHash?: Maybe<Scalars['String']>;
	pseudo?: Maybe<Scalars['String']>;
	userAuthToken?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "User" */
export type User_Mutation_Response = {
	__typename?: 'User_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<User>;
};

/** on_conflict condition type for table "User" */
export type User_On_Conflict = {
	constraint: User_Constraint;
	update_columns?: Array<User_Update_Column>;
	where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "User". */
export type User_Order_By = {
	created_at?: InputMaybe<Order_By>;
	email?: InputMaybe<Order_By>;
	full_name?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	passwordHash?: InputMaybe<Order_By>;
	pseudo?: InputMaybe<Order_By>;
	userAuthToken?: InputMaybe<Order_By>;
};

/** primary key columns input for table: User */
export type User_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "User" */
export enum User_Select_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Email = 'email',
	/** column name */
	FullName = 'full_name',
	/** column name */
	Id = 'id',
	/** column name */
	PasswordHash = 'passwordHash',
	/** column name */
	Pseudo = 'pseudo',
	/** column name */
	UserAuthToken = 'userAuthToken',
}

/** input type for updating data in table "User" */
export type User_Set_Input = {
	created_at?: InputMaybe<Scalars['date']>;
	email?: InputMaybe<Scalars['String']>;
	full_name?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['uuid']>;
	passwordHash?: InputMaybe<Scalars['String']>;
	pseudo?: InputMaybe<Scalars['String']>;
	userAuthToken?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "User" */
export type User_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	initial_value: User_Stream_Cursor_Value_Input;
	/** cursor ordering */
	ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
	created_at?: InputMaybe<Scalars['date']>;
	email?: InputMaybe<Scalars['String']>;
	full_name?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['uuid']>;
	passwordHash?: InputMaybe<Scalars['String']>;
	pseudo?: InputMaybe<Scalars['String']>;
	userAuthToken?: InputMaybe<Scalars['String']>;
};

/** update columns of table "User" */
export enum User_Update_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Email = 'email',
	/** column name */
	FullName = 'full_name',
	/** column name */
	Id = 'id',
	/** column name */
	PasswordHash = 'passwordHash',
	/** column name */
	Pseudo = 'pseudo',
	/** column name */
	UserAuthToken = 'userAuthToken',
}

export type User_Updates = {
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<User_Set_Input>;
	/** filter the rows which have to be updated */
	where: User_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
	/** ascending ordering of the cursor */
	Asc = 'ASC',
	/** descending ordering of the cursor */
	Desc = 'DESC',
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
	_eq?: InputMaybe<Scalars['date']>;
	_gt?: InputMaybe<Scalars['date']>;
	_gte?: InputMaybe<Scalars['date']>;
	_in?: InputMaybe<Array<Scalars['date']>>;
	_is_null?: InputMaybe<Scalars['Boolean']>;
	_lt?: InputMaybe<Scalars['date']>;
	_lte?: InputMaybe<Scalars['date']>;
	_neq?: InputMaybe<Scalars['date']>;
	_nin?: InputMaybe<Array<Scalars['date']>>;
};

/** mutation root */
export type Mutation_Root = {
	__typename?: 'mutation_root';
	/** delete data from the table: "Elo" */
	delete_Elo?: Maybe<Elo_Mutation_Response>;
	/** delete single row from the table: "Elo" */
	delete_Elo_by_pk?: Maybe<Elo>;
	/** delete data from the table: "Game" */
	delete_Game?: Maybe<Game_Mutation_Response>;
	/** delete single row from the table: "Game" */
	delete_Game_by_pk?: Maybe<Game>;
	/** delete data from the table: "Match" */
	delete_Match?: Maybe<Match_Mutation_Response>;
	/** delete single row from the table: "Match" */
	delete_Match_by_pk?: Maybe<Match>;
	/** delete data from the table: "User" */
	delete_User?: Maybe<User_Mutation_Response>;
	/** delete data from the table: "UserMatch" */
	delete_UserMatch?: Maybe<UserMatch_Mutation_Response>;
	/** delete single row from the table: "UserMatch" */
	delete_UserMatch_by_pk?: Maybe<UserMatch>;
	/** delete single row from the table: "User" */
	delete_User_by_pk?: Maybe<User>;
	/** insert data into the table: "Elo" */
	insert_Elo?: Maybe<Elo_Mutation_Response>;
	/** insert a single row into the table: "Elo" */
	insert_Elo_one?: Maybe<Elo>;
	/** insert data into the table: "Game" */
	insert_Game?: Maybe<Game_Mutation_Response>;
	/** insert a single row into the table: "Game" */
	insert_Game_one?: Maybe<Game>;
	/** insert data into the table: "Match" */
	insert_Match?: Maybe<Match_Mutation_Response>;
	/** insert a single row into the table: "Match" */
	insert_Match_one?: Maybe<Match>;
	/** insert data into the table: "User" */
	insert_User?: Maybe<User_Mutation_Response>;
	/** insert data into the table: "UserMatch" */
	insert_UserMatch?: Maybe<UserMatch_Mutation_Response>;
	/** insert a single row into the table: "UserMatch" */
	insert_UserMatch_one?: Maybe<UserMatch>;
	/** insert a single row into the table: "User" */
	insert_User_one?: Maybe<User>;
	/** update data of the table: "Elo" */
	update_Elo?: Maybe<Elo_Mutation_Response>;
	/** update single row of the table: "Elo" */
	update_Elo_by_pk?: Maybe<Elo>;
	/** update multiples rows of table: "Elo" */
	update_Elo_many?: Maybe<Array<Maybe<Elo_Mutation_Response>>>;
	/** update data of the table: "Game" */
	update_Game?: Maybe<Game_Mutation_Response>;
	/** update single row of the table: "Game" */
	update_Game_by_pk?: Maybe<Game>;
	/** update multiples rows of table: "Game" */
	update_Game_many?: Maybe<Array<Maybe<Game_Mutation_Response>>>;
	/** update data of the table: "Match" */
	update_Match?: Maybe<Match_Mutation_Response>;
	/** update single row of the table: "Match" */
	update_Match_by_pk?: Maybe<Match>;
	/** update multiples rows of table: "Match" */
	update_Match_many?: Maybe<Array<Maybe<Match_Mutation_Response>>>;
	/** update data of the table: "User" */
	update_User?: Maybe<User_Mutation_Response>;
	/** update data of the table: "UserMatch" */
	update_UserMatch?: Maybe<UserMatch_Mutation_Response>;
	/** update single row of the table: "UserMatch" */
	update_UserMatch_by_pk?: Maybe<UserMatch>;
	/** update multiples rows of table: "UserMatch" */
	update_UserMatch_many?: Maybe<Array<Maybe<UserMatch_Mutation_Response>>>;
	/** update single row of the table: "User" */
	update_User_by_pk?: Maybe<User>;
	/** update multiples rows of table: "User" */
	update_User_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_EloArgs = {
	where: Elo_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Elo_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_GameArgs = {
	where: Game_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Game_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_MatchArgs = {
	where: Match_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Match_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_UserArgs = {
	where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_UserMatchArgs = {
	where: UserMatch_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_UserMatch_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootInsert_EloArgs = {
	objects: Array<Elo_Insert_Input>;
	on_conflict?: InputMaybe<Elo_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Elo_OneArgs = {
	object: Elo_Insert_Input;
	on_conflict?: InputMaybe<Elo_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_GameArgs = {
	objects: Array<Game_Insert_Input>;
	on_conflict?: InputMaybe<Game_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Game_OneArgs = {
	object: Game_Insert_Input;
	on_conflict?: InputMaybe<Game_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_MatchArgs = {
	objects: Array<Match_Insert_Input>;
	on_conflict?: InputMaybe<Match_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Match_OneArgs = {
	object: Match_Insert_Input;
	on_conflict?: InputMaybe<Match_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserArgs = {
	objects: Array<User_Insert_Input>;
	on_conflict?: InputMaybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserMatchArgs = {
	objects: Array<UserMatch_Insert_Input>;
	on_conflict?: InputMaybe<UserMatch_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserMatch_OneArgs = {
	object: UserMatch_Insert_Input;
	on_conflict?: InputMaybe<UserMatch_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
	object: User_Insert_Input;
	on_conflict?: InputMaybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_EloArgs = {
	_inc?: InputMaybe<Elo_Inc_Input>;
	_set?: InputMaybe<Elo_Set_Input>;
	where: Elo_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Elo_By_PkArgs = {
	_inc?: InputMaybe<Elo_Inc_Input>;
	_set?: InputMaybe<Elo_Set_Input>;
	pk_columns: Elo_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Elo_ManyArgs = {
	updates: Array<Elo_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_GameArgs = {
	_set?: InputMaybe<Game_Set_Input>;
	where: Game_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Game_By_PkArgs = {
	_set?: InputMaybe<Game_Set_Input>;
	pk_columns: Game_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Game_ManyArgs = {
	updates: Array<Game_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_MatchArgs = {
	_set?: InputMaybe<Match_Set_Input>;
	where: Match_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Match_By_PkArgs = {
	_set?: InputMaybe<Match_Set_Input>;
	pk_columns: Match_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Match_ManyArgs = {
	updates: Array<Match_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
	_set?: InputMaybe<User_Set_Input>;
	where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_UserMatchArgs = {
	_inc?: InputMaybe<UserMatch_Inc_Input>;
	_set?: InputMaybe<UserMatch_Set_Input>;
	where: UserMatch_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_UserMatch_By_PkArgs = {
	_inc?: InputMaybe<UserMatch_Inc_Input>;
	_set?: InputMaybe<UserMatch_Set_Input>;
	pk_columns: UserMatch_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UserMatch_ManyArgs = {
	updates: Array<UserMatch_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
	_set?: InputMaybe<User_Set_Input>;
	pk_columns: User_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
	updates: Array<User_Updates>;
};

/** column ordering options */
export enum Order_By {
	/** in ascending order, nulls last */
	Asc = 'asc',
	/** in ascending order, nulls first */
	AscNullsFirst = 'asc_nulls_first',
	/** in ascending order, nulls last */
	AscNullsLast = 'asc_nulls_last',
	/** in descending order, nulls first */
	Desc = 'desc',
	/** in descending order, nulls first */
	DescNullsFirst = 'desc_nulls_first',
	/** in descending order, nulls last */
	DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
	__typename?: 'query_root';
	/** fetch data from the table: "Elo" */
	Elo: Array<Elo>;
	/** fetch aggregated fields from the table: "Elo" */
	Elo_aggregate: Elo_Aggregate;
	/** fetch data from the table: "Elo" using primary key columns */
	Elo_by_pk?: Maybe<Elo>;
	/** fetch data from the table: "Game" */
	Game: Array<Game>;
	/** fetch aggregated fields from the table: "Game" */
	Game_aggregate: Game_Aggregate;
	/** fetch data from the table: "Game" using primary key columns */
	Game_by_pk?: Maybe<Game>;
	/** fetch data from the table: "Match" */
	Match: Array<Match>;
	/** fetch aggregated fields from the table: "Match" */
	Match_aggregate: Match_Aggregate;
	/** fetch data from the table: "Match" using primary key columns */
	Match_by_pk?: Maybe<Match>;
	/** fetch data from the table: "User" */
	User: Array<User>;
	/** fetch data from the table: "UserMatch" */
	UserMatch: Array<UserMatch>;
	/** fetch aggregated fields from the table: "UserMatch" */
	UserMatch_aggregate: UserMatch_Aggregate;
	/** fetch data from the table: "UserMatch" using primary key columns */
	UserMatch_by_pk?: Maybe<UserMatch>;
	/** fetch aggregated fields from the table: "User" */
	User_aggregate: User_Aggregate;
	/** fetch data from the table: "User" using primary key columns */
	User_by_pk?: Maybe<User>;
};

export type Query_RootEloArgs = {
	distinct_on?: InputMaybe<Array<Elo_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Elo_Order_By>>;
	where?: InputMaybe<Elo_Bool_Exp>;
};

export type Query_RootElo_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Elo_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Elo_Order_By>>;
	where?: InputMaybe<Elo_Bool_Exp>;
};

export type Query_RootElo_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootGameArgs = {
	distinct_on?: InputMaybe<Array<Game_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Game_Order_By>>;
	where?: InputMaybe<Game_Bool_Exp>;
};

export type Query_RootGame_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Game_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Game_Order_By>>;
	where?: InputMaybe<Game_Bool_Exp>;
};

export type Query_RootGame_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootMatchArgs = {
	distinct_on?: InputMaybe<Array<Match_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Match_Order_By>>;
	where?: InputMaybe<Match_Bool_Exp>;
};

export type Query_RootMatch_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Match_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Match_Order_By>>;
	where?: InputMaybe<Match_Bool_Exp>;
};

export type Query_RootMatch_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootUserArgs = {
	distinct_on?: InputMaybe<Array<User_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<User_Order_By>>;
	where?: InputMaybe<User_Bool_Exp>;
};

export type Query_RootUserMatchArgs = {
	distinct_on?: InputMaybe<Array<UserMatch_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<UserMatch_Order_By>>;
	where?: InputMaybe<UserMatch_Bool_Exp>;
};

export type Query_RootUserMatch_AggregateArgs = {
	distinct_on?: InputMaybe<Array<UserMatch_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<UserMatch_Order_By>>;
	where?: InputMaybe<UserMatch_Bool_Exp>;
};

export type Query_RootUserMatch_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootUser_AggregateArgs = {
	distinct_on?: InputMaybe<Array<User_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<User_Order_By>>;
	where?: InputMaybe<User_Bool_Exp>;
};

export type Query_RootUser_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_Root = {
	__typename?: 'subscription_root';
	/** fetch data from the table: "Elo" */
	Elo: Array<Elo>;
	/** fetch aggregated fields from the table: "Elo" */
	Elo_aggregate: Elo_Aggregate;
	/** fetch data from the table: "Elo" using primary key columns */
	Elo_by_pk?: Maybe<Elo>;
	/** fetch data from the table in a streaming manner: "Elo" */
	Elo_stream: Array<Elo>;
	/** fetch data from the table: "Game" */
	Game: Array<Game>;
	/** fetch aggregated fields from the table: "Game" */
	Game_aggregate: Game_Aggregate;
	/** fetch data from the table: "Game" using primary key columns */
	Game_by_pk?: Maybe<Game>;
	/** fetch data from the table in a streaming manner: "Game" */
	Game_stream: Array<Game>;
	/** fetch data from the table: "Match" */
	Match: Array<Match>;
	/** fetch aggregated fields from the table: "Match" */
	Match_aggregate: Match_Aggregate;
	/** fetch data from the table: "Match" using primary key columns */
	Match_by_pk?: Maybe<Match>;
	/** fetch data from the table in a streaming manner: "Match" */
	Match_stream: Array<Match>;
	/** fetch data from the table: "User" */
	User: Array<User>;
	/** fetch data from the table: "UserMatch" */
	UserMatch: Array<UserMatch>;
	/** fetch aggregated fields from the table: "UserMatch" */
	UserMatch_aggregate: UserMatch_Aggregate;
	/** fetch data from the table: "UserMatch" using primary key columns */
	UserMatch_by_pk?: Maybe<UserMatch>;
	/** fetch data from the table in a streaming manner: "UserMatch" */
	UserMatch_stream: Array<UserMatch>;
	/** fetch aggregated fields from the table: "User" */
	User_aggregate: User_Aggregate;
	/** fetch data from the table: "User" using primary key columns */
	User_by_pk?: Maybe<User>;
	/** fetch data from the table in a streaming manner: "User" */
	User_stream: Array<User>;
};

export type Subscription_RootEloArgs = {
	distinct_on?: InputMaybe<Array<Elo_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Elo_Order_By>>;
	where?: InputMaybe<Elo_Bool_Exp>;
};

export type Subscription_RootElo_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Elo_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Elo_Order_By>>;
	where?: InputMaybe<Elo_Bool_Exp>;
};

export type Subscription_RootElo_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootElo_StreamArgs = {
	batch_size: Scalars['Int'];
	cursor: Array<InputMaybe<Elo_Stream_Cursor_Input>>;
	where?: InputMaybe<Elo_Bool_Exp>;
};

export type Subscription_RootGameArgs = {
	distinct_on?: InputMaybe<Array<Game_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Game_Order_By>>;
	where?: InputMaybe<Game_Bool_Exp>;
};

export type Subscription_RootGame_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Game_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Game_Order_By>>;
	where?: InputMaybe<Game_Bool_Exp>;
};

export type Subscription_RootGame_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootGame_StreamArgs = {
	batch_size: Scalars['Int'];
	cursor: Array<InputMaybe<Game_Stream_Cursor_Input>>;
	where?: InputMaybe<Game_Bool_Exp>;
};

export type Subscription_RootMatchArgs = {
	distinct_on?: InputMaybe<Array<Match_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Match_Order_By>>;
	where?: InputMaybe<Match_Bool_Exp>;
};

export type Subscription_RootMatch_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Match_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<Match_Order_By>>;
	where?: InputMaybe<Match_Bool_Exp>;
};

export type Subscription_RootMatch_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootMatch_StreamArgs = {
	batch_size: Scalars['Int'];
	cursor: Array<InputMaybe<Match_Stream_Cursor_Input>>;
	where?: InputMaybe<Match_Bool_Exp>;
};

export type Subscription_RootUserArgs = {
	distinct_on?: InputMaybe<Array<User_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<User_Order_By>>;
	where?: InputMaybe<User_Bool_Exp>;
};

export type Subscription_RootUserMatchArgs = {
	distinct_on?: InputMaybe<Array<UserMatch_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<UserMatch_Order_By>>;
	where?: InputMaybe<UserMatch_Bool_Exp>;
};

export type Subscription_RootUserMatch_AggregateArgs = {
	distinct_on?: InputMaybe<Array<UserMatch_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<UserMatch_Order_By>>;
	where?: InputMaybe<UserMatch_Bool_Exp>;
};

export type Subscription_RootUserMatch_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootUserMatch_StreamArgs = {
	batch_size: Scalars['Int'];
	cursor: Array<InputMaybe<UserMatch_Stream_Cursor_Input>>;
	where?: InputMaybe<UserMatch_Bool_Exp>;
};

export type Subscription_RootUser_AggregateArgs = {
	distinct_on?: InputMaybe<Array<User_Select_Column>>;
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	order_by?: InputMaybe<Array<User_Order_By>>;
	where?: InputMaybe<User_Bool_Exp>;
};

export type Subscription_RootUser_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootUser_StreamArgs = {
	batch_size: Scalars['Int'];
	cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
	where?: InputMaybe<User_Bool_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
	_eq?: InputMaybe<Scalars['uuid']>;
	_gt?: InputMaybe<Scalars['uuid']>;
	_gte?: InputMaybe<Scalars['uuid']>;
	_in?: InputMaybe<Array<Scalars['uuid']>>;
	_is_null?: InputMaybe<Scalars['Boolean']>;
	_lt?: InputMaybe<Scalars['uuid']>;
	_lte?: InputMaybe<Scalars['uuid']>;
	_neq?: InputMaybe<Scalars['uuid']>;
	_nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetAllUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllUserQuery = {
	__typename?: 'query_root';
	User: Array<{
		__typename?: 'User';
		id: any;
		email: string;
		full_name?: string | null;
		pseudo?: string | null;
	}>;
};

export type GetUserByEmailQueryVariables = Exact<{
	email: Scalars['String'];
}>;

export type GetUserByEmailQuery = {
	__typename?: 'query_root';
	User: Array<{
		__typename?: 'User';
		id: any;
		email: string;
		full_name?: string | null;
		pseudo?: string | null;
	}>;
};

export type AddGameMutationVariables = Exact<{
	name: Scalars['String'];
  }>;
  
  
  export type AddGameMutation = { __typename?: 'mutation_root', insert_Game_one?: { __typename?: 'Game', name: string } | null };
  