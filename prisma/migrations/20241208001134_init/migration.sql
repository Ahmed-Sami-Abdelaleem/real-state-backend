-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3),
    "about" TEXT,
    "type" TEXT NOT NULL,
    "address" TEXT,
    "profilePicture" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" TEXT NOT NULL,
    "categoryID" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "description" TEXT,
    "title" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "images" TEXT[],
    "amenities" TEXT[],
    "roomsDetails" TEXT[],

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "categoryName" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wish" (
    "wishNumber" TEXT NOT NULL,
    "buyerID" TEXT NOT NULL,
    "propertyID" TEXT NOT NULL,
    "wishDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wish_pkey" PRIMARY KEY ("wishNumber")
);

-- CreateTable
CREATE TABLE "Message" (
    "messageNumber" TEXT NOT NULL,
    "senderID" TEXT NOT NULL,
    "receiverID" TEXT NOT NULL,
    "messageContent" TEXT NOT NULL,
    "messageDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("messageNumber")
);

-- CreateTable
CREATE TABLE "Review" (
    "reviewNumber" TEXT NOT NULL,
    "reviewerID" TEXT NOT NULL,
    "reviewerRating" TEXT NOT NULL,
    "reviewDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reviewContent" TEXT NOT NULL,
    "propertyID" TEXT NOT NULL,
    "applyNumber" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("reviewNumber")
);

-- CreateTable
CREATE TABLE "Ad" (
    "id" TEXT NOT NULL,
    "negotiationPrice" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "propertyID" TEXT NOT NULL,
    "receiverID" TEXT NOT NULL,

    CONSTRAINT "Ad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Buy" (
    "id" TEXT NOT NULL,
    "buyerID" TEXT NOT NULL,
    "propertyID" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Buy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wish" ADD CONSTRAINT "Wish_buyerID_fkey" FOREIGN KEY ("buyerID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wish" ADD CONSTRAINT "Wish_propertyID_fkey" FOREIGN KEY ("propertyID") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderID_fkey" FOREIGN KEY ("senderID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_receiverID_fkey" FOREIGN KEY ("receiverID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_reviewerID_fkey" FOREIGN KEY ("reviewerID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_propertyID_fkey" FOREIGN KEY ("propertyID") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_applyNumber_fkey" FOREIGN KEY ("applyNumber") REFERENCES "Buy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ad" ADD CONSTRAINT "Ad_propertyID_fkey" FOREIGN KEY ("propertyID") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ad" ADD CONSTRAINT "Ad_receiverID_fkey" FOREIGN KEY ("receiverID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Buy" ADD CONSTRAINT "Buy_buyerID_fkey" FOREIGN KEY ("buyerID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Buy" ADD CONSTRAINT "Buy_propertyID_fkey" FOREIGN KEY ("propertyID") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
