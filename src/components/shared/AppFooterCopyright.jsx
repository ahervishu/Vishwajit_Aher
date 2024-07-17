function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        <div className="text-center py-4">
          <>
            &copy; {new Date().getFullYear()} Vishwajit.aher. All rights
            reserved.
          </>
        </div>
      </div>
    </div>
  );
}

export default AppFooterCopyright;
