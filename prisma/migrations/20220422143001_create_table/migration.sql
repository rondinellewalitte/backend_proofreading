-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "test" (
    "id" TEXT NOT NULL,
    "id_client" TEXT NOT NULL,
    "student_name" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "room" TEXT NOT NULL,
    "answer_01" TEXT,
    "answer_02" TEXT,
    "answer_03" TEXT,
    "answer_04" TEXT,
    "answer_05" TEXT,
    "answer_06" TEXT,
    "answer_07" TEXT,
    "answer_08" TEXT,
    "answer_09" TEXT,
    "answer_10" TEXT,
    "answer_11" TEXT,
    "answer_12" TEXT,
    "answer_13" TEXT,
    "answer_14" TEXT,
    "answer_15" TEXT,
    "answer_16" TEXT,
    "answer_17" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "test_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");
