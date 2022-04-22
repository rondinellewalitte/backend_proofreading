-- AddForeignKey
ALTER TABLE "rooms" ADD CONSTRAINT "rooms_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test" ADD CONSTRAINT "test_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
